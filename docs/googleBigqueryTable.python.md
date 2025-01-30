# `googleBigqueryTable` Submodule <a name="`googleBigqueryTable` Submodule" id="@cdktf/provider-google-beta.googleBigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryTable <a name="GoogleBigqueryTable" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table google_bigquery_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  table_id: str,
  biglake_configuration: GoogleBigqueryTableBiglakeConfiguration = None,
  clustering: typing.List[str] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  encryption_configuration: GoogleBigqueryTableEncryptionConfiguration = None,
  expiration_time: typing.Union[int, float] = None,
  external_catalog_table_options: GoogleBigqueryTableExternalCatalogTableOptions = None,
  external_data_configuration: GoogleBigqueryTableExternalDataConfiguration = None,
  friendly_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  materialized_view: GoogleBigqueryTableMaterializedView = None,
  max_staleness: str = None,
  project: str = None,
  range_partitioning: GoogleBigqueryTableRangePartitioning = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None,
  resource_tags: typing.Mapping[str] = None,
  schema: str = None,
  table_constraints: GoogleBigqueryTableTableConstraints = None,
  table_replication_info: GoogleBigqueryTableTableReplicationInfo = None,
  time_partitioning: GoogleBigqueryTableTimePartitioning = None,
  view: GoogleBigqueryTableView = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.tableId">table_id</a></code> | <code>str</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.biglakeConfiguration">biglake_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a></code> | biglake_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.clustering">clustering</a></code> | <code>typing.List[str]</code> | Specifies column names to use for data clustering. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.description">description</a></code> | <code>str</code> | The field description. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.expirationTime">expiration_time</a></code> | <code>typing.Union[int, float]</code> | The time when this table expires, in milliseconds since the epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.externalCatalogTableOptions">external_catalog_table_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a></code> | external_catalog_table_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.externalDataConfiguration">external_data_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a></code> | external_data_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#id GoogleBigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.maxStaleness">max_staleness</a></code> | <code>str</code> | The maximum staleness of data that could be returned when the table (or stale MV) is queried. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | The tags attached to this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.schema">schema</a></code> | <code>str</code> | A JSON schema for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.tableConstraints">table_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a></code> | table_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.tableReplicationInfo">table_replication_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a></code> | table_replication_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a></code> | view block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.datasetId"></a>

- *Type:* str

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#dataset_id GoogleBigqueryTable#dataset_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.tableId"></a>

- *Type:* str

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_id GoogleBigqueryTable#table_id}

---

##### `biglake_configuration`<sup>Optional</sup> <a name="biglake_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.biglakeConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a>

biglake_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#biglake_configuration GoogleBigqueryTable#biglake_configuration}

---

##### `clustering`<sup>Optional</sup> <a name="clustering" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.clustering"></a>

- *Type:* typing.List[str]

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#clustering GoogleBigqueryTable#clustering}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the instance.

When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the table will fail. When the field is set to false, deleting the table is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#deletion_protection GoogleBigqueryTable#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.description"></a>

- *Type:* str

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#description GoogleBigqueryTable#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#encryption_configuration GoogleBigqueryTable#encryption_configuration}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.expirationTime"></a>

- *Type:* typing.Union[int, float]

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#expiration_time GoogleBigqueryTable#expiration_time}

---

##### `external_catalog_table_options`<sup>Optional</sup> <a name="external_catalog_table_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.externalCatalogTableOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a>

external_catalog_table_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#external_catalog_table_options GoogleBigqueryTable#external_catalog_table_options}

---

##### `external_data_configuration`<sup>Optional</sup> <a name="external_data_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.externalDataConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#external_data_configuration GoogleBigqueryTable#external_data_configuration}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.friendlyName"></a>

- *Type:* str

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#friendly_name GoogleBigqueryTable#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#id GoogleBigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#labels GoogleBigqueryTable#labels}

---

##### `materialized_view`<sup>Optional</sup> <a name="materialized_view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.materializedView"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#materialized_view GoogleBigqueryTable#materialized_view}

---

##### `max_staleness`<sup>Optional</sup> <a name="max_staleness" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.maxStaleness"></a>

- *Type:* str

The maximum staleness of data that could be returned when the table (or stale MV) is queried.

Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#max_staleness GoogleBigqueryTable#max_staleness}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#project GoogleBigqueryTable#project}

---

##### `range_partitioning`<sup>Optional</sup> <a name="range_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.rangePartitioning"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#range_partitioning GoogleBigqueryTable#range_partitioning}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.requirePartitionFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.resourceTags"></a>

- *Type:* typing.Mapping[str]

The tags attached to this table.

Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#resource_tags GoogleBigqueryTable#resource_tags}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.schema"></a>

- *Type:* str

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#schema GoogleBigqueryTable#schema}

---

##### `table_constraints`<sup>Optional</sup> <a name="table_constraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.tableConstraints"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a>

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_constraints GoogleBigqueryTable#table_constraints}

---

##### `table_replication_info`<sup>Optional</sup> <a name="table_replication_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.tableReplicationInfo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a>

table_replication_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_replication_info GoogleBigqueryTable#table_replication_info}

---

##### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.timePartitioning"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#time_partitioning GoogleBigqueryTable#time_partitioning}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#view GoogleBigqueryTable#view}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration">put_biglake_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalCatalogTableOptions">put_external_catalog_table_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration">put_external_data_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView">put_materialized_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putRangePartitioning">put_range_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableConstraints">put_table_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo">put_table_replication_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning">put_time_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putView">put_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetBiglakeConfiguration">reset_biglake_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetClustering">reset_clustering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExpirationTime">reset_expiration_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExternalCatalogTableOptions">reset_external_catalog_table_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExternalDataConfiguration">reset_external_data_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetMaterializedView">reset_materialized_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetMaxStaleness">reset_max_staleness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetRangePartitioning">reset_range_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetRequirePartitionFilter">reset_require_partition_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTableConstraints">reset_table_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTableReplicationInfo">reset_table_replication_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTimePartitioning">reset_time_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_biglake_configuration` <a name="put_biglake_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration"></a>

```python
def put_biglake_configuration(
  connection_id: str,
  file_format: str,
  storage_uri: str,
  table_format: str
) -> None
```

###### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration.parameter.connectionId"></a>

- *Type:* str

The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage.

The connection_id can have the form "<project_id>.<location_id>.<connection_id>" or "projects/<project_id>/locations/<location_id>/connections/<connection_id>".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

###### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration.parameter.fileFormat"></a>

- *Type:* str

The file format the data is stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#file_format GoogleBigqueryTable#file_format}

---

###### `storage_uri`<sup>Required</sup> <a name="storage_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration.parameter.storageUri"></a>

- *Type:* str

The fully qualified location prefix of the external folder where table data is stored.

The '*' wildcard character is not allowed. The URI should be in the format "gs://bucket/path_to_table/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#storage_uri GoogleBigqueryTable#storage_uri}

---

###### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration.parameter.tableFormat"></a>

- *Type:* str

The table format the metadata only snapshots are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_format GoogleBigqueryTable#table_format}

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

The self link or full name of a key which should be used to encrypt this table.

Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#kms_key_name GoogleBigqueryTable#kms_key_name}

---

##### `put_external_catalog_table_options` <a name="put_external_catalog_table_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalCatalogTableOptions"></a>

```python
def put_external_catalog_table_options(
  connection_id: str = None,
  parameters: typing.Mapping[str] = None,
  storage_descriptor: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor = None
) -> None
```

###### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalCatalogTableOptions.parameter.connectionId"></a>

- *Type:* str

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connection is needed to read the open source table from BigQuery Engine. The connection_id can have the form <project_id>.<location_id>.<connection_id> or projects/<project_id>/locations/<location_id>/connections/<connection_id>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalCatalogTableOptions.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

A map of key value pairs defining the parameters and properties of the open source table.

Corresponds with hive meta store table parameters. Maximum size of 4Mib.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#parameters GoogleBigqueryTable#parameters}

---

###### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalCatalogTableOptions.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#storage_descriptor GoogleBigqueryTable#storage_descriptor}

---

##### `put_external_data_configuration` <a name="put_external_data_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration"></a>

```python
def put_external_data_configuration(
  autodetect: typing.Union[bool, IResolvable],
  source_uris: typing.List[str],
  avro_options: GoogleBigqueryTableExternalDataConfigurationAvroOptions = None,
  bigtable_options: GoogleBigqueryTableExternalDataConfigurationBigtableOptions = None,
  compression: str = None,
  connection_id: str = None,
  csv_options: GoogleBigqueryTableExternalDataConfigurationCsvOptions = None,
  file_set_spec_type: str = None,
  google_sheets_options: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions = None,
  hive_partitioning_options: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  json_extension: str = None,
  json_options: GoogleBigqueryTableExternalDataConfigurationJsonOptions = None,
  max_bad_records: typing.Union[int, float] = None,
  metadata_cache_mode: str = None,
  object_metadata: str = None,
  parquet_options: GoogleBigqueryTableExternalDataConfigurationParquetOptions = None,
  reference_file_schema_uri: str = None,
  schema: str = None,
  source_format: str = None
) -> None
```

###### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.autodetect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#autodetect GoogleBigqueryTable#autodetect}

---

###### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.sourceUris"></a>

- *Type:* typing.List[str]

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_uris GoogleBigqueryTable#source_uris}

---

###### `avro_options`<sup>Optional</sup> <a name="avro_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.avroOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#avro_options GoogleBigqueryTable#avro_options}

---

###### `bigtable_options`<sup>Optional</sup> <a name="bigtable_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.bigtableOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

bigtable_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#bigtable_options GoogleBigqueryTable#bigtable_options}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.compression"></a>

- *Type:* str

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#compression GoogleBigqueryTable#compression}

---

###### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.connectionId"></a>

- *Type:* str

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "<project>.<location>.<connection_id>" or "projects/<project>/locations/<location>/connections/<connection_id>".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

###### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.csvOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#csv_options GoogleBigqueryTable#csv_options}

---

###### `file_set_spec_type`<sup>Optional</sup> <a name="file_set_spec_type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.fileSetSpecType"></a>

- *Type:* str

Specifies how source URIs are interpreted for constructing the file set to load.

By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#file_set_spec_type GoogleBigqueryTable#file_set_spec_type}

---

###### `google_sheets_options`<sup>Optional</sup> <a name="google_sheets_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.googleSheetsOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#google_sheets_options GoogleBigqueryTable#google_sheets_options}

---

###### `hive_partitioning_options`<sup>Optional</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.hivePartitioningOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#hive_partitioning_options GoogleBigqueryTable#hive_partitioning_options}

---

###### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.ignoreUnknownValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#ignore_unknown_values GoogleBigqueryTable#ignore_unknown_values}

---

###### `json_extension`<sup>Optional</sup> <a name="json_extension" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.jsonExtension"></a>

- *Type:* str

Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded.

To load newline-delimited GeoJSON, specify GEOJSON (and sourceFormat must be set to NEWLINE_DELIMITED_JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#json_extension GoogleBigqueryTable#json_extension}

---

###### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.jsonOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#json_options GoogleBigqueryTable#json_options}

---

###### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.maxBadRecords"></a>

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#max_bad_records GoogleBigqueryTable#max_bad_records}

---

###### `metadata_cache_mode`<sup>Optional</sup> <a name="metadata_cache_mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.metadataCacheMode"></a>

- *Type:* str

Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#metadata_cache_mode GoogleBigqueryTable#metadata_cache_mode}

---

###### `object_metadata`<sup>Optional</sup> <a name="object_metadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.objectMetadata"></a>

- *Type:* str

Object Metadata is used to create Object Tables.

Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#object_metadata GoogleBigqueryTable#object_metadata}

---

###### `parquet_options`<sup>Optional</sup> <a name="parquet_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.parquetOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#parquet_options GoogleBigqueryTable#parquet_options}

---

###### `reference_file_schema_uri`<sup>Optional</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.referenceFileSchemaUri"></a>

- *Type:* str

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#reference_file_schema_uri GoogleBigqueryTable#reference_file_schema_uri}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.schema"></a>

- *Type:* str

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#schema GoogleBigqueryTable#schema}

---

###### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.sourceFormat"></a>

- *Type:* str

Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_format GoogleBigqueryTable#source_format}

---

##### `put_materialized_view` <a name="put_materialized_view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView"></a>

```python
def put_materialized_view(
  query: str,
  allow_non_incremental_definition: typing.Union[bool, IResolvable] = None,
  enable_refresh: typing.Union[bool, IResolvable] = None,
  refresh_interval_ms: typing.Union[int, float] = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView.parameter.query"></a>

- *Type:* str

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#query GoogleBigqueryTable#query}

---

###### `allow_non_incremental_definition`<sup>Optional</sup> <a name="allow_non_incremental_definition" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView.parameter.allowNonIncrementalDefinition"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow non incremental materialized view definition. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#allow_non_incremental_definition GoogleBigqueryTable#allow_non_incremental_definition}

---

###### `enable_refresh`<sup>Optional</sup> <a name="enable_refresh" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView.parameter.enableRefresh"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#enable_refresh GoogleBigqueryTable#enable_refresh}

---

###### `refresh_interval_ms`<sup>Optional</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView.parameter.refreshIntervalMs"></a>

- *Type:* typing.Union[int, float]

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#refresh_interval_ms GoogleBigqueryTable#refresh_interval_ms}

---

##### `put_range_partitioning` <a name="put_range_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putRangePartitioning"></a>

```python
def put_range_partitioning(
  field: str,
  range: GoogleBigqueryTableRangePartitioningRange
) -> None
```

###### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putRangePartitioning.parameter.field"></a>

- *Type:* str

The field used to determine how to create a range-based partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#field GoogleBigqueryTable#field}

---

###### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putRangePartitioning.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#range GoogleBigqueryTable#range}

---

##### `put_table_constraints` <a name="put_table_constraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableConstraints"></a>

```python
def put_table_constraints(
  foreign_keys: typing.Union[IResolvable, typing.List[GoogleBigqueryTableTableConstraintsForeignKeys]] = None,
  primary_key: GoogleBigqueryTableTableConstraintsPrimaryKey = None
) -> None
```

###### `foreign_keys`<sup>Optional</sup> <a name="foreign_keys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableConstraints.parameter.foreignKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]]

foreign_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#foreign_keys GoogleBigqueryTable#foreign_keys}

---

###### `primary_key`<sup>Optional</sup> <a name="primary_key" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableConstraints.parameter.primaryKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#primary_key GoogleBigqueryTable#primary_key}

---

##### `put_table_replication_info` <a name="put_table_replication_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo"></a>

```python
def put_table_replication_info(
  source_dataset_id: str,
  source_project_id: str,
  source_table_id: str,
  replication_interval_ms: typing.Union[int, float] = None
) -> None
```

###### `source_dataset_id`<sup>Required</sup> <a name="source_dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo.parameter.sourceDatasetId"></a>

- *Type:* str

The ID of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_dataset_id GoogleBigqueryTable#source_dataset_id}

---

###### `source_project_id`<sup>Required</sup> <a name="source_project_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo.parameter.sourceProjectId"></a>

- *Type:* str

The ID of the source project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_project_id GoogleBigqueryTable#source_project_id}

---

###### `source_table_id`<sup>Required</sup> <a name="source_table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo.parameter.sourceTableId"></a>

- *Type:* str

The ID of the source materialized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_table_id GoogleBigqueryTable#source_table_id}

---

###### `replication_interval_ms`<sup>Optional</sup> <a name="replication_interval_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo.parameter.replicationIntervalMs"></a>

- *Type:* typing.Union[int, float]

The interval at which the source materialized view is polled for updates. The default is 300000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#replication_interval_ms GoogleBigqueryTable#replication_interval_ms}

---

##### `put_time_partitioning` <a name="put_time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning"></a>

```python
def put_time_partitioning(
  type: str,
  expiration_ms: typing.Union[int, float] = None,
  field: str = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning.parameter.type"></a>

- *Type:* str

The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}

---

###### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning.parameter.expirationMs"></a>

- *Type:* typing.Union[int, float]

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#expiration_ms GoogleBigqueryTable#expiration_ms}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning.parameter.field"></a>

- *Type:* str

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#field GoogleBigqueryTable#field}

---

###### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning.parameter.requirePartitionFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

##### `put_view` <a name="put_view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putView"></a>

```python
def put_view(
  query: str,
  use_legacy_sql: typing.Union[bool, IResolvable] = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putView.parameter.query"></a>

- *Type:* str

A query that BigQuery executes when the view is referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#query GoogleBigqueryTable#query}

---

###### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putView.parameter.useLegacySql"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#use_legacy_sql GoogleBigqueryTable#use_legacy_sql}

---

##### `reset_biglake_configuration` <a name="reset_biglake_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetBiglakeConfiguration"></a>

```python
def reset_biglake_configuration() -> None
```

##### `reset_clustering` <a name="reset_clustering" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetClustering"></a>

```python
def reset_clustering() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_expiration_time` <a name="reset_expiration_time" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExpirationTime"></a>

```python
def reset_expiration_time() -> None
```

##### `reset_external_catalog_table_options` <a name="reset_external_catalog_table_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExternalCatalogTableOptions"></a>

```python
def reset_external_catalog_table_options() -> None
```

##### `reset_external_data_configuration` <a name="reset_external_data_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExternalDataConfiguration"></a>

```python
def reset_external_data_configuration() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_materialized_view` <a name="reset_materialized_view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetMaterializedView"></a>

```python
def reset_materialized_view() -> None
```

##### `reset_max_staleness` <a name="reset_max_staleness" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetMaxStaleness"></a>

```python
def reset_max_staleness() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_range_partitioning` <a name="reset_range_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetRangePartitioning"></a>

```python
def reset_range_partitioning() -> None
```

##### `reset_require_partition_filter` <a name="reset_require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetRequirePartitionFilter"></a>

```python
def reset_require_partition_filter() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_table_constraints` <a name="reset_table_constraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTableConstraints"></a>

```python
def reset_table_constraints() -> None
```

##### `reset_table_replication_info` <a name="reset_table_replication_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTableReplicationInfo"></a>

```python
def reset_table_replication_info() -> None
```

##### `reset_time_partitioning` <a name="reset_time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTimePartitioning"></a>

```python
def reset_time_partitioning() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.biglakeConfiguration">biglake_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference">GoogleBigqueryTableBiglakeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference">GoogleBigqueryTableEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalCatalogTableOptions">external_catalog_table_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalDataConfiguration">external_data_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference">GoogleBigqueryTableExternalDataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference">GoogleBigqueryTableMaterializedViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numBytes">num_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numLongTermBytes">num_long_term_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numRows">num_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference">GoogleBigqueryTableRangePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableConstraints">table_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference">GoogleBigqueryTableTableConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableReplicationInfo">table_replication_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference">GoogleBigqueryTableTableReplicationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference">GoogleBigqueryTableTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference">GoogleBigqueryTableViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.biglakeConfigurationInput">biglake_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.clusteringInput">clustering_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.expirationTimeInput">expiration_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalCatalogTableOptionsInput">external_catalog_table_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalDataConfigurationInput">external_data_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.materializedViewInput">materialized_view_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.maxStalenessInput">max_staleness_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.rangePartitioningInput">range_partitioning_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.requirePartitionFilterInput">require_partition_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableConstraintsInput">table_constraints_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableReplicationInfoInput">table_replication_info_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.timePartitioningInput">time_partitioning_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.viewInput">view_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.clustering">clustering</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.expirationTime">expiration_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.maxStaleness">max_staleness</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `biglake_configuration`<sup>Required</sup> <a name="biglake_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.biglakeConfiguration"></a>

```python
biglake_configuration: GoogleBigqueryTableBiglakeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference">GoogleBigqueryTableBiglakeConfigurationOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.encryptionConfiguration"></a>

```python
encryption_configuration: GoogleBigqueryTableEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference">GoogleBigqueryTableEncryptionConfigurationOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `external_catalog_table_options`<sup>Required</sup> <a name="external_catalog_table_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalCatalogTableOptions"></a>

```python
external_catalog_table_options: GoogleBigqueryTableExternalCatalogTableOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsOutputReference</a>

---

##### `external_data_configuration`<sup>Required</sup> <a name="external_data_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalDataConfiguration"></a>

```python
external_data_configuration: GoogleBigqueryTableExternalDataConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference">GoogleBigqueryTableExternalDataConfigurationOutputReference</a>

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `materialized_view`<sup>Required</sup> <a name="materialized_view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.materializedView"></a>

```python
materialized_view: GoogleBigqueryTableMaterializedViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference">GoogleBigqueryTableMaterializedViewOutputReference</a>

---

##### `num_bytes`<sup>Required</sup> <a name="num_bytes" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numBytes"></a>

```python
num_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_long_term_bytes`<sup>Required</sup> <a name="num_long_term_bytes" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numLongTermBytes"></a>

```python
num_long_term_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_rows`<sup>Required</sup> <a name="num_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numRows"></a>

```python
num_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `range_partitioning`<sup>Required</sup> <a name="range_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.rangePartitioning"></a>

```python
range_partitioning: GoogleBigqueryTableRangePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference">GoogleBigqueryTableRangePartitioningOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `table_constraints`<sup>Required</sup> <a name="table_constraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableConstraints"></a>

```python
table_constraints: GoogleBigqueryTableTableConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference">GoogleBigqueryTableTableConstraintsOutputReference</a>

---

##### `table_replication_info`<sup>Required</sup> <a name="table_replication_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableReplicationInfo"></a>

```python
table_replication_info: GoogleBigqueryTableTableReplicationInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference">GoogleBigqueryTableTableReplicationInfoOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_partitioning`<sup>Required</sup> <a name="time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.timePartitioning"></a>

```python
time_partitioning: GoogleBigqueryTableTimePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference">GoogleBigqueryTableTimePartitioningOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.view"></a>

```python
view: GoogleBigqueryTableViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference">GoogleBigqueryTableViewOutputReference</a>

---

##### `biglake_configuration_input`<sup>Optional</sup> <a name="biglake_configuration_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.biglakeConfigurationInput"></a>

```python
biglake_configuration_input: GoogleBigqueryTableBiglakeConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a>

---

##### `clustering_input`<sup>Optional</sup> <a name="clustering_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.clusteringInput"></a>

```python
clustering_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: GoogleBigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a>

---

##### `expiration_time_input`<sup>Optional</sup> <a name="expiration_time_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.expirationTimeInput"></a>

```python
expiration_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_catalog_table_options_input`<sup>Optional</sup> <a name="external_catalog_table_options_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalCatalogTableOptionsInput"></a>

```python
external_catalog_table_options_input: GoogleBigqueryTableExternalCatalogTableOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a>

---

##### `external_data_configuration_input`<sup>Optional</sup> <a name="external_data_configuration_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalDataConfigurationInput"></a>

```python
external_data_configuration_input: GoogleBigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a>

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `materialized_view_input`<sup>Optional</sup> <a name="materialized_view_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.materializedViewInput"></a>

```python
materialized_view_input: GoogleBigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a>

---

##### `max_staleness_input`<sup>Optional</sup> <a name="max_staleness_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.maxStalenessInput"></a>

```python
max_staleness_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `range_partitioning_input`<sup>Optional</sup> <a name="range_partitioning_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.rangePartitioningInput"></a>

```python
range_partitioning_input: GoogleBigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a>

---

##### `require_partition_filter_input`<sup>Optional</sup> <a name="require_partition_filter_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.requirePartitionFilterInput"></a>

```python
require_partition_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `table_constraints_input`<sup>Optional</sup> <a name="table_constraints_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableConstraintsInput"></a>

```python
table_constraints_input: GoogleBigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a>

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `table_replication_info_input`<sup>Optional</sup> <a name="table_replication_info_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableReplicationInfoInput"></a>

```python
table_replication_info_input: GoogleBigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a>

---

##### `time_partitioning_input`<sup>Optional</sup> <a name="time_partitioning_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.timePartitioningInput"></a>

```python
time_partitioning_input: GoogleBigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a>

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.viewInput"></a>

```python
view_input: GoogleBigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a>

---

##### `clustering`<sup>Required</sup> <a name="clustering" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.clustering"></a>

```python
clustering: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.expirationTime"></a>

```python
expiration_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_staleness`<sup>Required</sup> <a name="max_staleness" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.maxStaleness"></a>

```python
max_staleness: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryTableBiglakeConfiguration <a name="GoogleBigqueryTableBiglakeConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration(
  connection_id: str,
  file_format: str,
  storage_uri: str,
  table_format: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.connectionId">connection_id</a></code> | <code>str</code> | The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.fileFormat">file_format</a></code> | <code>str</code> | The file format the data is stored in. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.storageUri">storage_uri</a></code> | <code>str</code> | The fully qualified location prefix of the external folder where table data is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.tableFormat">table_format</a></code> | <code>str</code> | The table format the metadata only snapshots are stored in. |

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage.

The connection_id can have the form "<project_id>.<location_id>.<connection_id>" or "projects/<project_id>/locations/<location_id>/connections/<connection_id>".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

The file format the data is stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#file_format GoogleBigqueryTable#file_format}

---

##### `storage_uri`<sup>Required</sup> <a name="storage_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.storageUri"></a>

```python
storage_uri: str
```

- *Type:* str

The fully qualified location prefix of the external folder where table data is stored.

The '*' wildcard character is not allowed. The URI should be in the format "gs://bucket/path_to_table/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#storage_uri GoogleBigqueryTable#storage_uri}

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

The table format the metadata only snapshots are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_format GoogleBigqueryTable#table_format}

---

### GoogleBigqueryTableConfig <a name="GoogleBigqueryTableConfig" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  table_id: str,
  biglake_configuration: GoogleBigqueryTableBiglakeConfiguration = None,
  clustering: typing.List[str] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  encryption_configuration: GoogleBigqueryTableEncryptionConfiguration = None,
  expiration_time: typing.Union[int, float] = None,
  external_catalog_table_options: GoogleBigqueryTableExternalCatalogTableOptions = None,
  external_data_configuration: GoogleBigqueryTableExternalDataConfiguration = None,
  friendly_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  materialized_view: GoogleBigqueryTableMaterializedView = None,
  max_staleness: str = None,
  project: str = None,
  range_partitioning: GoogleBigqueryTableRangePartitioning = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None,
  resource_tags: typing.Mapping[str] = None,
  schema: str = None,
  table_constraints: GoogleBigqueryTableTableConstraints = None,
  table_replication_info: GoogleBigqueryTableTableReplicationInfo = None,
  time_partitioning: GoogleBigqueryTableTimePartitioning = None,
  view: GoogleBigqueryTableView = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableId">table_id</a></code> | <code>str</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.biglakeConfiguration">biglake_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a></code> | biglake_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.clustering">clustering</a></code> | <code>typing.List[str]</code> | Specifies column names to use for data clustering. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.description">description</a></code> | <code>str</code> | The field description. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.expirationTime">expiration_time</a></code> | <code>typing.Union[int, float]</code> | The time when this table expires, in milliseconds since the epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.externalCatalogTableOptions">external_catalog_table_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a></code> | external_catalog_table_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.externalDataConfiguration">external_data_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a></code> | external_data_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#id GoogleBigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.maxStaleness">max_staleness</a></code> | <code>str</code> | The maximum staleness of data that could be returned when the table (or stale MV) is queried. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | The tags attached to this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.schema">schema</a></code> | <code>str</code> | A JSON schema for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableConstraints">table_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a></code> | table_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableReplicationInfo">table_replication_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a></code> | table_replication_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a></code> | view block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#dataset_id GoogleBigqueryTable#dataset_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_id GoogleBigqueryTable#table_id}

---

##### `biglake_configuration`<sup>Optional</sup> <a name="biglake_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.biglakeConfiguration"></a>

```python
biglake_configuration: GoogleBigqueryTableBiglakeConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a>

biglake_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#biglake_configuration GoogleBigqueryTable#biglake_configuration}

---

##### `clustering`<sup>Optional</sup> <a name="clustering" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.clustering"></a>

```python
clustering: typing.List[str]
```

- *Type:* typing.List[str]

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#clustering GoogleBigqueryTable#clustering}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the instance.

When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the table will fail. When the field is set to false, deleting the table is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#deletion_protection GoogleBigqueryTable#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#description GoogleBigqueryTable#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: GoogleBigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#encryption_configuration GoogleBigqueryTable#encryption_configuration}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.expirationTime"></a>

```python
expiration_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#expiration_time GoogleBigqueryTable#expiration_time}

---

##### `external_catalog_table_options`<sup>Optional</sup> <a name="external_catalog_table_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.externalCatalogTableOptions"></a>

```python
external_catalog_table_options: GoogleBigqueryTableExternalCatalogTableOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a>

external_catalog_table_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#external_catalog_table_options GoogleBigqueryTable#external_catalog_table_options}

---

##### `external_data_configuration`<sup>Optional</sup> <a name="external_data_configuration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.externalDataConfiguration"></a>

```python
external_data_configuration: GoogleBigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#external_data_configuration GoogleBigqueryTable#external_data_configuration}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#friendly_name GoogleBigqueryTable#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#id GoogleBigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#labels GoogleBigqueryTable#labels}

---

##### `materialized_view`<sup>Optional</sup> <a name="materialized_view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.materializedView"></a>

```python
materialized_view: GoogleBigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#materialized_view GoogleBigqueryTable#materialized_view}

---

##### `max_staleness`<sup>Optional</sup> <a name="max_staleness" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.maxStaleness"></a>

```python
max_staleness: str
```

- *Type:* str

The maximum staleness of data that could be returned when the table (or stale MV) is queried.

Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#max_staleness GoogleBigqueryTable#max_staleness}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#project GoogleBigqueryTable#project}

---

##### `range_partitioning`<sup>Optional</sup> <a name="range_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.rangePartitioning"></a>

```python
range_partitioning: GoogleBigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#range_partitioning GoogleBigqueryTable#range_partitioning}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags attached to this table.

Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#resource_tags GoogleBigqueryTable#resource_tags}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#schema GoogleBigqueryTable#schema}

---

##### `table_constraints`<sup>Optional</sup> <a name="table_constraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableConstraints"></a>

```python
table_constraints: GoogleBigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a>

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_constraints GoogleBigqueryTable#table_constraints}

---

##### `table_replication_info`<sup>Optional</sup> <a name="table_replication_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableReplicationInfo"></a>

```python
table_replication_info: GoogleBigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a>

table_replication_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_replication_info GoogleBigqueryTable#table_replication_info}

---

##### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.timePartitioning"></a>

```python
time_partitioning: GoogleBigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#time_partitioning GoogleBigqueryTable#time_partitioning}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.view"></a>

```python
view: GoogleBigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#view GoogleBigqueryTable#view}

---

### GoogleBigqueryTableEncryptionConfiguration <a name="GoogleBigqueryTableEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The self link or full name of a key which should be used to encrypt this table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The self link or full name of a key which should be used to encrypt this table.

Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#kms_key_name GoogleBigqueryTable#kms_key_name}

---

### GoogleBigqueryTableExternalCatalogTableOptions <a name="GoogleBigqueryTableExternalCatalogTableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions(
  connection_id: str = None,
  parameters: typing.Mapping[str] = None,
  storage_descriptor: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.connectionId">connection_id</a></code> | <code>str</code> | The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | A map of key value pairs defining the parameters and properties of the open source table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | storage_descriptor block. |

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connection is needed to read the open source table from BigQuery Engine. The connection_id can have the form <project_id>.<location_id>.<connection_id> or projects/<project_id>/locations/<location_id>/connections/<connection_id>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key value pairs defining the parameters and properties of the open source table.

Corresponds with hive meta store table parameters. Maximum size of 4Mib.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#parameters GoogleBigqueryTable#parameters}

---

##### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.storageDescriptor"></a>

```python
storage_descriptor: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#storage_descriptor GoogleBigqueryTable#storage_descriptor}

---

### GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor <a name="GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor(
  input_format: str = None,
  location_uri: str = None,
  output_format: str = None,
  serde_info: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.inputFormat">input_format</a></code> | <code>str</code> | Specifies the fully qualified class name of the InputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"). The maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.locationUri">location_uri</a></code> | <code>str</code> | The physical location of the table (e.g. 'gs://spark-dataproc-data/pangea-data/case_sensitive/' or 'gs://spark-dataproc-data/pangea-data/*'). The maximum length is 2056 bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.outputFormat">output_format</a></code> | <code>str</code> | Specifies the fully qualified class name of the OutputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"). The maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | serde_info block. |

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

Specifies the fully qualified class name of the InputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"). The maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#input_format GoogleBigqueryTable#input_format}

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

The physical location of the table (e.g. 'gs://spark-dataproc-data/pangea-data/case_sensitive/' or 'gs://spark-dataproc-data/pangea-data/*'). The maximum length is 2056 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#location_uri GoogleBigqueryTable#location_uri}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

Specifies the fully qualified class name of the OutputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"). The maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#output_format GoogleBigqueryTable#output_format}

---

##### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.serdeInfo"></a>

```python
serde_info: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#serde_info GoogleBigqueryTable#serde_info}

---

### GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo <a name="GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo(
  serialization_library: str,
  name: str = None,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | Specifies a fully-qualified class name of the serialization library that is responsible for the translation of data between table representation and the underlying low-level input and output format structures. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>str</code> | Name of the SerDe. The maximum length is 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs that define the initialization parameters for the serialization library. Maximum size 10 Kib. |

---

##### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

Specifies a fully-qualified class name of the serialization library that is responsible for the translation of data between table representation and the underlying low-level input and output format structures.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#serialization_library GoogleBigqueryTable#serialization_library}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the SerDe. The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#name GoogleBigqueryTable#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key-value pairs that define the initialization parameters for the serialization library. Maximum size 10 Kib.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#parameters GoogleBigqueryTable#parameters}

---

### GoogleBigqueryTableExternalDataConfiguration <a name="GoogleBigqueryTableExternalDataConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration(
  autodetect: typing.Union[bool, IResolvable],
  source_uris: typing.List[str],
  avro_options: GoogleBigqueryTableExternalDataConfigurationAvroOptions = None,
  bigtable_options: GoogleBigqueryTableExternalDataConfigurationBigtableOptions = None,
  compression: str = None,
  connection_id: str = None,
  csv_options: GoogleBigqueryTableExternalDataConfigurationCsvOptions = None,
  file_set_spec_type: str = None,
  google_sheets_options: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions = None,
  hive_partitioning_options: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  json_extension: str = None,
  json_options: GoogleBigqueryTableExternalDataConfigurationJsonOptions = None,
  max_bad_records: typing.Union[int, float] = None,
  metadata_cache_mode: str = None,
  object_metadata: str = None,
  parquet_options: GoogleBigqueryTableExternalDataConfigurationParquetOptions = None,
  reference_file_schema_uri: str = None,
  schema: str = None,
  source_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Let BigQuery try to autodetect the schema and format of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | A list of the fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.avroOptions">avro_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | avro_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.bigtableOptions">bigtable_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | bigtable_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.compression">compression</a></code> | <code>str</code> | The compression type of the data source. Valid values are "NONE" or "GZIP". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.connectionId">connection_id</a></code> | <code>str</code> | The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.fileSetSpecType">file_set_spec_type</a></code> | <code>str</code> | Specifies how source URIs are interpreted for constructing the file set to load. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.googleSheetsOptions">google_sheets_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | google_sheets_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.hivePartitioningOptions">hive_partitioning_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | hive_partitioning_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.jsonExtension">json_extension</a></code> | <code>str</code> | Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of bad records that BigQuery can ignore when reading data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.metadataCacheMode">metadata_cache_mode</a></code> | <code>str</code> | Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.objectMetadata">object_metadata</a></code> | <code>str</code> | Object Metadata is used to create Object Tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri">reference_file_schema_uri</a></code> | <code>str</code> | When creating an external table, the user can provide a reference file with the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.schema">schema</a></code> | <code>str</code> | A JSON schema for the external table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.sourceFormat">source_format</a></code> | <code>str</code> | Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly". |

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#autodetect GoogleBigqueryTable#autodetect}

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_uris GoogleBigqueryTable#source_uris}

---

##### `avro_options`<sup>Optional</sup> <a name="avro_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.avroOptions"></a>

```python
avro_options: GoogleBigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#avro_options GoogleBigqueryTable#avro_options}

---

##### `bigtable_options`<sup>Optional</sup> <a name="bigtable_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.bigtableOptions"></a>

```python
bigtable_options: GoogleBigqueryTableExternalDataConfigurationBigtableOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

bigtable_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#bigtable_options GoogleBigqueryTable#bigtable_options}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.compression"></a>

```python
compression: str
```

- *Type:* str

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#compression GoogleBigqueryTable#compression}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "<project>.<location>.<connection_id>" or "projects/<project>/locations/<location>/connections/<connection_id>".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

##### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.csvOptions"></a>

```python
csv_options: GoogleBigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#csv_options GoogleBigqueryTable#csv_options}

---

##### `file_set_spec_type`<sup>Optional</sup> <a name="file_set_spec_type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.fileSetSpecType"></a>

```python
file_set_spec_type: str
```

- *Type:* str

Specifies how source URIs are interpreted for constructing the file set to load.

By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#file_set_spec_type GoogleBigqueryTable#file_set_spec_type}

---

##### `google_sheets_options`<sup>Optional</sup> <a name="google_sheets_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.googleSheetsOptions"></a>

```python
google_sheets_options: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#google_sheets_options GoogleBigqueryTable#google_sheets_options}

---

##### `hive_partitioning_options`<sup>Optional</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.hivePartitioningOptions"></a>

```python
hive_partitioning_options: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#hive_partitioning_options GoogleBigqueryTable#hive_partitioning_options}

---

##### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#ignore_unknown_values GoogleBigqueryTable#ignore_unknown_values}

---

##### `json_extension`<sup>Optional</sup> <a name="json_extension" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.jsonExtension"></a>

```python
json_extension: str
```

- *Type:* str

Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded.

To load newline-delimited GeoJSON, specify GEOJSON (and sourceFormat must be set to NEWLINE_DELIMITED_JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#json_extension GoogleBigqueryTable#json_extension}

---

##### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.jsonOptions"></a>

```python
json_options: GoogleBigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#json_options GoogleBigqueryTable#json_options}

---

##### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#max_bad_records GoogleBigqueryTable#max_bad_records}

---

##### `metadata_cache_mode`<sup>Optional</sup> <a name="metadata_cache_mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.metadataCacheMode"></a>

```python
metadata_cache_mode: str
```

- *Type:* str

Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#metadata_cache_mode GoogleBigqueryTable#metadata_cache_mode}

---

##### `object_metadata`<sup>Optional</sup> <a name="object_metadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.objectMetadata"></a>

```python
object_metadata: str
```

- *Type:* str

Object Metadata is used to create Object Tables.

Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#object_metadata GoogleBigqueryTable#object_metadata}

---

##### `parquet_options`<sup>Optional</sup> <a name="parquet_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.parquetOptions"></a>

```python
parquet_options: GoogleBigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#parquet_options GoogleBigqueryTable#parquet_options}

---

##### `reference_file_schema_uri`<sup>Optional</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri"></a>

```python
reference_file_schema_uri: str
```

- *Type:* str

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#reference_file_schema_uri GoogleBigqueryTable#reference_file_schema_uri}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.schema"></a>

```python
schema: str
```

- *Type:* str

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#schema GoogleBigqueryTable#schema}

---

##### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_format GoogleBigqueryTable#source_format}

---

### GoogleBigqueryTableExternalDataConfigurationAvroOptions <a name="GoogleBigqueryTableExternalDataConfigurationAvroOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions(
  use_avro_logical_types: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). |

---

##### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#use_avro_logical_types GoogleBigqueryTable#use_avro_logical_types}

---

### GoogleBigqueryTableExternalDataConfigurationBigtableOptions <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions(
  column_family: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily]] = None,
  ignore_unspecified_column_families: typing.Union[bool, IResolvable] = None,
  output_column_families_as_json: typing.Union[bool, IResolvable] = None,
  read_rowkey_as_string: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.columnFamily">column_family</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]]</code> | column_family block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.ignoreUnspecifiedColumnFamilies">ignore_unspecified_column_families</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.outputColumnFamiliesAsJson">output_column_families_as_json</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If field is true, then each column family will be read as a single JSON column. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.readRowkeyAsString">read_rowkey_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If field is true, then the rowkey column families will be read and converted to string. |

---

##### `column_family`<sup>Optional</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.columnFamily"></a>

```python
column_family: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]]

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#column_family GoogleBigqueryTable#column_family}

---

##### `ignore_unspecified_column_families`<sup>Optional</sup> <a name="ignore_unspecified_column_families" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.ignoreUnspecifiedColumnFamilies"></a>

```python
ignore_unspecified_column_families: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema.

Otherwise, they are read with BYTES type values. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#ignore_unspecified_column_families GoogleBigqueryTable#ignore_unspecified_column_families}

---

##### `output_column_families_as_json`<sup>Optional</sup> <a name="output_column_families_as_json" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.outputColumnFamiliesAsJson"></a>

```python
output_column_families_as_json: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If field is true, then each column family will be read as a single JSON column.

Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#output_column_families_as_json GoogleBigqueryTable#output_column_families_as_json}

---

##### `read_rowkey_as_string`<sup>Optional</sup> <a name="read_rowkey_as_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.readRowkeyAsString"></a>

```python
read_rowkey_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If field is true, then the rowkey column families will be read and converted to string.

Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#read_rowkey_as_string GoogleBigqueryTable#read_rowkey_as_string}

---

### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily(
  column: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn]] = None,
  encoding: str = None,
  family_id: str = None,
  only_read_latest: typing.Union[bool, IResolvable] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.column">column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]]</code> | column block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.encoding">encoding</a></code> | <code>str</code> | The encoding of the values when the type is not STRING. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.familyId">family_id</a></code> | <code>str</code> | Identifier of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.onlyReadLatest">only_read_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this is set only the latest version of value are exposed for all columns in this column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.type">type</a></code> | <code>str</code> | The type to convert the value in cells of this column family. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.column"></a>

```python
column: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#column GoogleBigqueryTable#column}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The encoding of the values when the type is not STRING.

Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

##### `family_id`<sup>Optional</sup> <a name="family_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.familyId"></a>

```python
family_id: str
```

- *Type:* str

Identifier of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#family_id GoogleBigqueryTable#family_id}

---

##### `only_read_latest`<sup>Optional</sup> <a name="only_read_latest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.onlyReadLatest"></a>

```python
only_read_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this is set only the latest version of value are exposed for all columns in this column family.

This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#only_read_latest GoogleBigqueryTable#only_read_latest}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.type"></a>

```python
type: str
```

- *Type:* str

The type to convert the value in cells of this column family.

The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): "BYTES", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "JSON". Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}

---

### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn(
  encoding: str = None,
  field_name: str = None,
  only_read_latest: typing.Union[bool, IResolvable] = None,
  qualifier_encoded: str = None,
  qualifier_string: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.encoding">encoding</a></code> | <code>str</code> | The encoding of the values when the type is not STRING. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.fieldName">field_name</a></code> | <code>str</code> | If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.onlyReadLatest">only_read_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this is set, only the latest version of value in this column are exposed. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierEncoded">qualifier_encoded</a></code> | <code>str</code> | Qualifier of the column. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierString">qualifier_string</a></code> | <code>str</code> | Qualifier string. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.type">type</a></code> | <code>str</code> | The type to convert the value in cells of this column. |

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The encoding of the values when the type is not STRING.

Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#field_name GoogleBigqueryTable#field_name}

---

##### `only_read_latest`<sup>Optional</sup> <a name="only_read_latest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.onlyReadLatest"></a>

```python
only_read_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this is set, only the latest version of value in this column are exposed.

'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#only_read_latest GoogleBigqueryTable#only_read_latest}

---

##### `qualifier_encoded`<sup>Optional</sup> <a name="qualifier_encoded" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierEncoded"></a>

```python
qualifier_encoded: str
```

- *Type:* str

Qualifier of the column.

Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifierString field. Otherwise, a base-64 encoded value must be set to qualifierEncoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as fieldName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#qualifier_encoded GoogleBigqueryTable#qualifier_encoded}

---

##### `qualifier_string`<sup>Optional</sup> <a name="qualifier_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierString"></a>

```python
qualifier_string: str
```

- *Type:* str

Qualifier string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#qualifier_string GoogleBigqueryTable#qualifier_string}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.type"></a>

```python
type: str
```

- *Type:* str

The type to convert the value in cells of this column.

The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): "BYTES", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "JSON", Default type is "BYTES". 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}

---

### GoogleBigqueryTableExternalDataConfigurationCsvOptions <a name="GoogleBigqueryTableExternalDataConfigurationCsvOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions(
  quote: str,
  allow_jagged_rows: typing.Union[bool, IResolvable] = None,
  allow_quoted_newlines: typing.Union[bool, IResolvable] = None,
  encoding: str = None,
  field_delimiter: str = None,
  skip_leading_rows: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.quote">quote</a></code> | <code>str</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.encoding">encoding</a></code> | <code>str</code> | The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | The number of rows at the top of a CSV file that BigQuery will skip when reading the data. |

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.quote"></a>

```python
quote: str
```

- *Type:* str

The value that is used to quote data sections in a CSV file.

If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as ". Due to limitations with Terraform default values, this value is required to be explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#quote GoogleBigqueryTable#quote}

---

##### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#allow_jagged_rows GoogleBigqueryTable#allow_jagged_rows}

---

##### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#allow_quoted_newlines GoogleBigqueryTable#allow_quoted_newlines}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#field_delimiter GoogleBigqueryTable#field_delimiter}

---

##### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#skip_leading_rows GoogleBigqueryTable#skip_leading_rows}

---

### GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions <a name="GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions(
  range: str = None,
  skip_leading_rows: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range">range</a></code> | <code>str</code> | Range of a sheet to query from. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | The number of rows at the top of the sheet that BigQuery will skip when reading the data. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range"></a>

```python
range: str
```

- *Type:* str

Range of a sheet to query from.

Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#range GoogleBigqueryTable#range}

---

##### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#skip_leading_rows GoogleBigqueryTable#skip_leading_rows}

---

### GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions <a name="GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions(
  mode: str = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None,
  source_uri_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode">mode</a></code> | <code>str</code> | When set, what mode of hive partitioning to use when reading data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix">source_uri_prefix</a></code> | <code>str</code> | When hive partition detection is requested, a common for all source uris must be required. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode"></a>

```python
mode: str
```

- *Type:* str

When set, what mode of hive partitioning to use when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#mode GoogleBigqueryTable#mode}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

##### `source_uri_prefix`<sup>Optional</sup> <a name="source_uri_prefix" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix"></a>

```python
source_uri_prefix: str
```

- *Type:* str

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_uri_prefix GoogleBigqueryTable#source_uri_prefix}

---

### GoogleBigqueryTableExternalDataConfigurationJsonOptions <a name="GoogleBigqueryTableExternalDataConfigurationJsonOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions(
  encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions.property.encoding">encoding</a></code> | <code>str</code> | The character encoding of the data. |

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data.

The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

### GoogleBigqueryTableExternalDataConfigurationParquetOptions <a name="GoogleBigqueryTableExternalDataConfigurationParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions(
  enable_list_inference: typing.Union[bool, IResolvable] = None,
  enum_as_string: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference">enable_list_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString">enum_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `enable_list_inference`<sup>Optional</sup> <a name="enable_list_inference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference"></a>

```python
enable_list_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#enable_list_inference GoogleBigqueryTable#enable_list_inference}

---

##### `enum_as_string`<sup>Optional</sup> <a name="enum_as_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString"></a>

```python
enum_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#enum_as_string GoogleBigqueryTable#enum_as_string}

---

### GoogleBigqueryTableMaterializedView <a name="GoogleBigqueryTableMaterializedView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableMaterializedView(
  query: str,
  allow_non_incremental_definition: typing.Union[bool, IResolvable] = None,
  enable_refresh: typing.Union[bool, IResolvable] = None,
  refresh_interval_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.query">query</a></code> | <code>str</code> | A query whose result is persisted. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.allowNonIncrementalDefinition">allow_non_incremental_definition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow non incremental materialized view definition. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.enableRefresh">enable_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.refreshIntervalMs">refresh_interval_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.query"></a>

```python
query: str
```

- *Type:* str

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#query GoogleBigqueryTable#query}

---

##### `allow_non_incremental_definition`<sup>Optional</sup> <a name="allow_non_incremental_definition" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.allowNonIncrementalDefinition"></a>

```python
allow_non_incremental_definition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow non incremental materialized view definition. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#allow_non_incremental_definition GoogleBigqueryTable#allow_non_incremental_definition}

---

##### `enable_refresh`<sup>Optional</sup> <a name="enable_refresh" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.enableRefresh"></a>

```python
enable_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#enable_refresh GoogleBigqueryTable#enable_refresh}

---

##### `refresh_interval_ms`<sup>Optional</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.refreshIntervalMs"></a>

```python
refresh_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#refresh_interval_ms GoogleBigqueryTable#refresh_interval_ms}

---

### GoogleBigqueryTableRangePartitioning <a name="GoogleBigqueryTableRangePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableRangePartitioning(
  field: str,
  range: GoogleBigqueryTableRangePartitioningRange
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.property.field">field</a></code> | <code>str</code> | The field used to determine how to create a range-based partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a></code> | range block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.property.field"></a>

```python
field: str
```

- *Type:* str

The field used to determine how to create a range-based partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#field GoogleBigqueryTable#field}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.property.range"></a>

```python
range: GoogleBigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#range GoogleBigqueryTable#range}

---

### GoogleBigqueryTableRangePartitioningRange <a name="GoogleBigqueryTableRangePartitioningRange" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange(
  end: typing.Union[int, float],
  interval: typing.Union[int, float],
  start: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.end">end</a></code> | <code>typing.Union[int, float]</code> | End of the range partitioning, exclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The width of each range within the partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Start of the range partitioning, inclusive. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

End of the range partitioning, exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#end GoogleBigqueryTable#end}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#interval GoogleBigqueryTable#interval}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#start GoogleBigqueryTable#start}

---

### GoogleBigqueryTableTableConstraints <a name="GoogleBigqueryTableTableConstraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraints(
  foreign_keys: typing.Union[IResolvable, typing.List[GoogleBigqueryTableTableConstraintsForeignKeys]] = None,
  primary_key: GoogleBigqueryTableTableConstraintsPrimaryKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.property.foreignKeys">foreign_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]]</code> | foreign_keys block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.property.primaryKey">primary_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | primary_key block. |

---

##### `foreign_keys`<sup>Optional</sup> <a name="foreign_keys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.property.foreignKeys"></a>

```python
foreign_keys: typing.Union[IResolvable, typing.List[GoogleBigqueryTableTableConstraintsForeignKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]]

foreign_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#foreign_keys GoogleBigqueryTable#foreign_keys}

---

##### `primary_key`<sup>Optional</sup> <a name="primary_key" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.property.primaryKey"></a>

```python
primary_key: GoogleBigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#primary_key GoogleBigqueryTable#primary_key}

---

### GoogleBigqueryTableTableConstraintsForeignKeys <a name="GoogleBigqueryTableTableConstraintsForeignKeys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys(
  column_references: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences,
  referenced_table: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.columnReferences">column_references</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | column_references block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.referencedTable">referenced_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | referenced_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.name">name</a></code> | <code>str</code> | Set only if the foreign key constraint is named. |

---

##### `column_references`<sup>Required</sup> <a name="column_references" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.columnReferences"></a>

```python
column_references: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

column_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#column_references GoogleBigqueryTable#column_references}

---

##### `referenced_table`<sup>Required</sup> <a name="referenced_table" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.referencedTable"></a>

```python
referenced_table: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

referenced_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#referenced_table GoogleBigqueryTable#referenced_table}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.name"></a>

```python
name: str
```

- *Type:* str

Set only if the foreign key constraint is named.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#name GoogleBigqueryTable#name}

---

### GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences <a name="GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences(
  referenced_column: str,
  referencing_column: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn">referenced_column</a></code> | <code>str</code> | The column in the primary key that are referenced by the referencingColumn. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn">referencing_column</a></code> | <code>str</code> | The column that composes the foreign key. |

---

##### `referenced_column`<sup>Required</sup> <a name="referenced_column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn"></a>

```python
referenced_column: str
```

- *Type:* str

The column in the primary key that are referenced by the referencingColumn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#referenced_column GoogleBigqueryTable#referenced_column}

---

##### `referencing_column`<sup>Required</sup> <a name="referencing_column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn"></a>

```python
referencing_column: str
```

- *Type:* str

The column that composes the foreign key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#referencing_column GoogleBigqueryTable#referencing_column}

---

### GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable <a name="GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable(
  dataset_id: str,
  project_id: str,
  table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId">table_id</a></code> | <code>str</code> | The ID of the table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#dataset_id GoogleBigqueryTable#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#project_id GoogleBigqueryTable#project_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The ID of the table.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_id GoogleBigqueryTable#table_id}

---

### GoogleBigqueryTableTableConstraintsPrimaryKey <a name="GoogleBigqueryTableTableConstraintsPrimaryKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey(
  columns: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey.property.columns">columns</a></code> | <code>typing.List[str]</code> | The columns that are composed of the primary key constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

The columns that are composed of the primary key constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#columns GoogleBigqueryTable#columns}

---

### GoogleBigqueryTableTableReplicationInfo <a name="GoogleBigqueryTableTableReplicationInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo(
  source_dataset_id: str,
  source_project_id: str,
  source_table_id: str,
  replication_interval_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceDatasetId">source_dataset_id</a></code> | <code>str</code> | The ID of the source dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceProjectId">source_project_id</a></code> | <code>str</code> | The ID of the source project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceTableId">source_table_id</a></code> | <code>str</code> | The ID of the source materialized view. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.replicationIntervalMs">replication_interval_ms</a></code> | <code>typing.Union[int, float]</code> | The interval at which the source materialized view is polled for updates. The default is 300000. |

---

##### `source_dataset_id`<sup>Required</sup> <a name="source_dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceDatasetId"></a>

```python
source_dataset_id: str
```

- *Type:* str

The ID of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_dataset_id GoogleBigqueryTable#source_dataset_id}

---

##### `source_project_id`<sup>Required</sup> <a name="source_project_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceProjectId"></a>

```python
source_project_id: str
```

- *Type:* str

The ID of the source project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_project_id GoogleBigqueryTable#source_project_id}

---

##### `source_table_id`<sup>Required</sup> <a name="source_table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceTableId"></a>

```python
source_table_id: str
```

- *Type:* str

The ID of the source materialized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_table_id GoogleBigqueryTable#source_table_id}

---

##### `replication_interval_ms`<sup>Optional</sup> <a name="replication_interval_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.replicationIntervalMs"></a>

```python
replication_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval at which the source materialized view is polled for updates. The default is 300000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#replication_interval_ms GoogleBigqueryTable#replication_interval_ms}

---

### GoogleBigqueryTableTimePartitioning <a name="GoogleBigqueryTableTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTimePartitioning(
  type: str,
  expiration_ms: typing.Union[int, float] = None,
  field: str = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.type">type</a></code> | <code>str</code> | The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.expirationMs">expiration_ms</a></code> | <code>typing.Union[int, float]</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.field">field</a></code> | <code>str</code> | The field used to determine how to create a time-based partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.type"></a>

```python
type: str
```

- *Type:* str

The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}

---

##### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.expirationMs"></a>

```python
expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#expiration_ms GoogleBigqueryTable#expiration_ms}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.field"></a>

```python
field: str
```

- *Type:* str

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#field GoogleBigqueryTable#field}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

### GoogleBigqueryTableView <a name="GoogleBigqueryTableView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableView(
  query: str,
  use_legacy_sql: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.property.query">query</a></code> | <code>str</code> | A query that BigQuery executes when the view is referenced. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.property.useLegacySql">use_legacy_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to use BigQuery's legacy SQL for this view. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.property.query"></a>

```python
query: str
```

- *Type:* str

A query that BigQuery executes when the view is referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#query GoogleBigqueryTable#query}

---

##### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#use_legacy_sql GoogleBigqueryTable#use_legacy_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryTableBiglakeConfigurationOutputReference <a name="GoogleBigqueryTableBiglakeConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormatInput">file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUriInput">storage_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormatInput">table_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri">storage_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormatInput"></a>

```python
file_format_input: str
```

- *Type:* str

---

##### `storage_uri_input`<sup>Optional</sup> <a name="storage_uri_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUriInput"></a>

```python
storage_uri_input: str
```

- *Type:* str

---

##### `table_format_input`<sup>Optional</sup> <a name="table_format_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormatInput"></a>

```python
table_format_input: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `storage_uri`<sup>Required</sup> <a name="storage_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri"></a>

```python
storage_uri: str
```

- *Type:* str

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableBiglakeConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a>

---


### GoogleBigqueryTableEncryptionConfigurationOutputReference <a name="GoogleBigqueryTableEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a>

---


### GoogleBigqueryTableExternalCatalogTableOptionsOutputReference <a name="GoogleBigqueryTableExternalCatalogTableOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor">put_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetStorageDescriptor">reset_storage_descriptor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_storage_descriptor` <a name="put_storage_descriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor"></a>

```python
def put_storage_descriptor(
  input_format: str = None,
  location_uri: str = None,
  output_format: str = None,
  serde_info: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo = None
) -> None
```

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor.parameter.inputFormat"></a>

- *Type:* str

Specifies the fully qualified class name of the InputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"). The maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#input_format GoogleBigqueryTable#input_format}

---

###### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor.parameter.locationUri"></a>

- *Type:* str

The physical location of the table (e.g. 'gs://spark-dataproc-data/pangea-data/case_sensitive/' or 'gs://spark-dataproc-data/pangea-data/*'). The maximum length is 2056 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#location_uri GoogleBigqueryTable#location_uri}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor.parameter.outputFormat"></a>

- *Type:* str

Specifies the fully qualified class name of the OutputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"). The maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#output_format GoogleBigqueryTable#output_format}

---

###### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor.parameter.serdeInfo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#serde_info GoogleBigqueryTable#serde_info}

---

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_storage_descriptor` <a name="reset_storage_descriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetStorageDescriptor"></a>

```python
def reset_storage_descriptor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptorInput">storage_descriptor_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor"></a>

```python
storage_descriptor: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference</a>

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `storage_descriptor_input`<sup>Optional</sup> <a name="storage_descriptor_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptorInput"></a>

```python
storage_descriptor_input: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalCatalogTableOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a>

---


### GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference <a name="GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.putSerdeInfo">put_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetLocationUri">reset_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetSerdeInfo">reset_serde_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_serde_info` <a name="put_serde_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.putSerdeInfo"></a>

```python
def put_serde_info(
  serialization_library: str,
  name: str = None,
  parameters: typing.Mapping[str] = None
) -> None
```

###### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.putSerdeInfo.parameter.serializationLibrary"></a>

- *Type:* str

Specifies a fully-qualified class name of the serialization library that is responsible for the translation of data between table representation and the underlying low-level input and output format structures.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#serialization_library GoogleBigqueryTable#serialization_library}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.putSerdeInfo.parameter.name"></a>

- *Type:* str

Name of the SerDe. The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#name GoogleBigqueryTable#name}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.putSerdeInfo.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Key-value pairs that define the initialization parameters for the serialization library. Maximum size 10 Kib.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#parameters GoogleBigqueryTable#parameters}

---

##### `reset_input_format` <a name="reset_input_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_location_uri` <a name="reset_location_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetLocationUri"></a>

```python
def reset_location_uri() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_serde_info` <a name="reset_serde_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetSerdeInfo"></a>

```python
def reset_serde_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfoInput">serde_info_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `serde_info`<sup>Required</sup> <a name="serde_info" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo"></a>

```python
serde_info: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference</a>

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `serde_info_input`<sup>Optional</sup> <a name="serde_info_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```python
serde_info_input: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

---


### GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference <a name="GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">serialization_library_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serialization_library_input`<sup>Optional</sup> <a name="serialization_library_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```python
serialization_library_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

---


### GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput">use_avro_logical_types_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_avro_logical_types_input`<sup>Optional</sup> <a name="use_avro_logical_types_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput"></a>

```python
use_avro_logical_types_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]]

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetOnlyReadLatest">reset_only_read_latest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierEncoded">reset_qualifier_encoded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierString">reset_qualifier_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_name` <a name="reset_field_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_only_read_latest` <a name="reset_only_read_latest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetOnlyReadLatest"></a>

```python
def reset_only_read_latest() -> None
```

##### `reset_qualifier_encoded` <a name="reset_qualifier_encoded" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierEncoded"></a>

```python
def reset_qualifier_encoded() -> None
```

##### `reset_qualifier_string` <a name="reset_qualifier_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierString"></a>

```python
def reset_qualifier_string() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatestInput">only_read_latest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncodedInput">qualifier_encoded_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierStringInput">qualifier_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest">only_read_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded">qualifier_encoded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString">qualifier_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `only_read_latest_input`<sup>Optional</sup> <a name="only_read_latest_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatestInput"></a>

```python
only_read_latest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `qualifier_encoded_input`<sup>Optional</sup> <a name="qualifier_encoded_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncodedInput"></a>

```python
qualifier_encoded_input: str
```

- *Type:* str

---

##### `qualifier_string_input`<sup>Optional</sup> <a name="qualifier_string_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierStringInput"></a>

```python
qualifier_string_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `only_read_latest`<sup>Required</sup> <a name="only_read_latest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest"></a>

```python
only_read_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `qualifier_encoded`<sup>Required</sup> <a name="qualifier_encoded" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded"></a>

```python
qualifier_encoded: str
```

- *Type:* str

---

##### `qualifier_string`<sup>Required</sup> <a name="qualifier_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString"></a>

```python
qualifier_string: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]]

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetFamilyId">reset_family_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetOnlyReadLatest">reset_only_read_latest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column` <a name="put_column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn"></a>

```python
def put_column(
  value: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]]

---

##### `reset_column` <a name="reset_column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_family_id` <a name="reset_family_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetFamilyId"></a>

```python
def reset_family_id() -> None
```

##### `reset_only_read_latest` <a name="reset_only_read_latest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetOnlyReadLatest"></a>

```python
def reset_only_read_latest() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.columnInput">column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyIdInput">family_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatestInput">only_read_latest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId">family_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest">only_read_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column"></a>

```python
column: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.columnInput"></a>

```python
column_input: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>]]

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `family_id_input`<sup>Optional</sup> <a name="family_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyIdInput"></a>

```python
family_id_input: str
```

- *Type:* str

---

##### `only_read_latest_input`<sup>Optional</sup> <a name="only_read_latest_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatestInput"></a>

```python
only_read_latest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `family_id`<sup>Required</sup> <a name="family_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId"></a>

```python
family_id: str
```

- *Type:* str

---

##### `only_read_latest`<sup>Required</sup> <a name="only_read_latest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest"></a>

```python
only_read_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily">put_column_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetColumnFamily">reset_column_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetIgnoreUnspecifiedColumnFamilies">reset_ignore_unspecified_column_families</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetOutputColumnFamiliesAsJson">reset_output_column_families_as_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetReadRowkeyAsString">reset_read_rowkey_as_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_family` <a name="put_column_family" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily"></a>

```python
def put_column_family(
  value: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]]

---

##### `reset_column_family` <a name="reset_column_family" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetColumnFamily"></a>

```python
def reset_column_family() -> None
```

##### `reset_ignore_unspecified_column_families` <a name="reset_ignore_unspecified_column_families" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetIgnoreUnspecifiedColumnFamilies"></a>

```python
def reset_ignore_unspecified_column_families() -> None
```

##### `reset_output_column_families_as_json` <a name="reset_output_column_families_as_json" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetOutputColumnFamiliesAsJson"></a>

```python
def reset_output_column_families_as_json() -> None
```

##### `reset_read_rowkey_as_string` <a name="reset_read_rowkey_as_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetReadRowkeyAsString"></a>

```python
def reset_read_rowkey_as_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily">column_family</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamilyInput">column_family_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamiliesInput">ignore_unspecified_column_families_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJsonInput">output_column_families_as_json_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsStringInput">read_rowkey_as_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies">ignore_unspecified_column_families</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson">output_column_families_as_json</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString">read_rowkey_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily"></a>

```python
column_family: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a>

---

##### `column_family_input`<sup>Optional</sup> <a name="column_family_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamilyInput"></a>

```python
column_family_input: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]]

---

##### `ignore_unspecified_column_families_input`<sup>Optional</sup> <a name="ignore_unspecified_column_families_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamiliesInput"></a>

```python
ignore_unspecified_column_families_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `output_column_families_as_json_input`<sup>Optional</sup> <a name="output_column_families_as_json_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJsonInput"></a>

```python
output_column_families_as_json_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_rowkey_as_string_input`<sup>Optional</sup> <a name="read_rowkey_as_string_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsStringInput"></a>

```python
read_rowkey_as_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_unspecified_column_families`<sup>Required</sup> <a name="ignore_unspecified_column_families" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies"></a>

```python
ignore_unspecified_column_families: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `output_column_families_as_json`<sup>Required</sup> <a name="output_column_families_as_json" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson"></a>

```python
output_column_families_as_json: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_rowkey_as_string`<sup>Required</sup> <a name="read_rowkey_as_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString"></a>

```python
read_rowkey_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalDataConfigurationBigtableOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows">reset_allow_jagged_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines">reset_allow_quoted_newlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows">reset_skip_leading_rows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_jagged_rows` <a name="reset_allow_jagged_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows"></a>

```python
def reset_allow_jagged_rows() -> None
```

##### `reset_allow_quoted_newlines` <a name="reset_allow_quoted_newlines" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines"></a>

```python
def reset_allow_quoted_newlines() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_skip_leading_rows` <a name="reset_skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows"></a>

```python
def reset_skip_leading_rows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput">allow_jagged_rows_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput">allow_quoted_newlines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput">quote_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput">skip_leading_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote">quote</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_jagged_rows_input`<sup>Optional</sup> <a name="allow_jagged_rows_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput"></a>

```python
allow_jagged_rows_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_quoted_newlines_input`<sup>Optional</sup> <a name="allow_quoted_newlines_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput"></a>

```python
allow_quoted_newlines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `quote_input`<sup>Optional</sup> <a name="quote_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput"></a>

```python
quote_input: str
```

- *Type:* str

---

##### `skip_leading_rows_input`<sup>Optional</sup> <a name="skip_leading_rows_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput"></a>

```python
skip_leading_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_jagged_rows`<sup>Required</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_quoted_newlines`<sup>Required</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote"></a>

```python
quote: str
```

- *Type:* str

---

##### `skip_leading_rows`<sup>Required</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows">reset_skip_leading_rows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_range` <a name="reset_range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_skip_leading_rows` <a name="reset_skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows"></a>

```python
def reset_skip_leading_rows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput">range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput">skip_leading_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput"></a>

```python
range_input: str
```

- *Type:* str

---

##### `skip_leading_rows_input`<sup>Optional</sup> <a name="skip_leading_rows_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput"></a>

```python
skip_leading_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `skip_leading_rows`<sup>Required</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter">reset_require_partition_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix">reset_source_uri_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_require_partition_filter` <a name="reset_require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter"></a>

```python
def reset_require_partition_filter() -> None
```

##### `reset_source_uri_prefix` <a name="reset_source_uri_prefix" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix"></a>

```python
def reset_source_uri_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput">require_partition_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput">source_uri_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix">source_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `require_partition_filter_input`<sup>Optional</sup> <a name="require_partition_filter_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput"></a>

```python
require_partition_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_uri_prefix_input`<sup>Optional</sup> <a name="source_uri_prefix_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput"></a>

```python
source_uri_prefix_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_uri_prefix`<sup>Required</sup> <a name="source_uri_prefix" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix"></a>

```python
source_uri_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putAvroOptions">put_avro_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions">put_bigtable_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions">put_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions">put_google_sheets_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions">put_hive_partitioning_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putJsonOptions">put_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putParquetOptions">put_parquet_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions">reset_avro_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetBigtableOptions">reset_bigtable_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions">reset_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType">reset_file_set_spec_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions">reset_google_sheets_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions">reset_hive_partitioning_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues">reset_ignore_unknown_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetJsonExtension">reset_json_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions">reset_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords">reset_max_bad_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode">reset_metadata_cache_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata">reset_object_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions">reset_parquet_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri">reset_reference_file_schema_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat">reset_source_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro_options` <a name="put_avro_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putAvroOptions"></a>

```python
def put_avro_options(
  use_avro_logical_types: typing.Union[bool, IResolvable]
) -> None
```

###### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putAvroOptions.parameter.useAvroLogicalTypes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#use_avro_logical_types GoogleBigqueryTable#use_avro_logical_types}

---

##### `put_bigtable_options` <a name="put_bigtable_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions"></a>

```python
def put_bigtable_options(
  column_family: typing.Union[IResolvable, typing.List[GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily]] = None,
  ignore_unspecified_column_families: typing.Union[bool, IResolvable] = None,
  output_column_families_as_json: typing.Union[bool, IResolvable] = None,
  read_rowkey_as_string: typing.Union[bool, IResolvable] = None
) -> None
```

###### `column_family`<sup>Optional</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions.parameter.columnFamily"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>]]

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#column_family GoogleBigqueryTable#column_family}

---

###### `ignore_unspecified_column_families`<sup>Optional</sup> <a name="ignore_unspecified_column_families" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions.parameter.ignoreUnspecifiedColumnFamilies"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema.

Otherwise, they are read with BYTES type values. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#ignore_unspecified_column_families GoogleBigqueryTable#ignore_unspecified_column_families}

---

###### `output_column_families_as_json`<sup>Optional</sup> <a name="output_column_families_as_json" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions.parameter.outputColumnFamiliesAsJson"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If field is true, then each column family will be read as a single JSON column.

Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#output_column_families_as_json GoogleBigqueryTable#output_column_families_as_json}

---

###### `read_rowkey_as_string`<sup>Optional</sup> <a name="read_rowkey_as_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions.parameter.readRowkeyAsString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If field is true, then the rowkey column families will be read and converted to string.

Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#read_rowkey_as_string GoogleBigqueryTable#read_rowkey_as_string}

---

##### `put_csv_options` <a name="put_csv_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions"></a>

```python
def put_csv_options(
  quote: str,
  allow_jagged_rows: typing.Union[bool, IResolvable] = None,
  allow_quoted_newlines: typing.Union[bool, IResolvable] = None,
  encoding: str = None,
  field_delimiter: str = None,
  skip_leading_rows: typing.Union[int, float] = None
) -> None
```

###### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.quote"></a>

- *Type:* str

The value that is used to quote data sections in a CSV file.

If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as ". Due to limitations with Terraform default values, this value is required to be explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#quote GoogleBigqueryTable#quote}

---

###### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.allowJaggedRows"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#allow_jagged_rows GoogleBigqueryTable#allow_jagged_rows}

---

###### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.allowQuotedNewlines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#allow_quoted_newlines GoogleBigqueryTable#allow_quoted_newlines}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.encoding"></a>

- *Type:* str

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.fieldDelimiter"></a>

- *Type:* str

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#field_delimiter GoogleBigqueryTable#field_delimiter}

---

###### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.skipLeadingRows"></a>

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#skip_leading_rows GoogleBigqueryTable#skip_leading_rows}

---

##### `put_google_sheets_options` <a name="put_google_sheets_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions"></a>

```python
def put_google_sheets_options(
  range: str = None,
  skip_leading_rows: typing.Union[int, float] = None
) -> None
```

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions.parameter.range"></a>

- *Type:* str

Range of a sheet to query from.

Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#range GoogleBigqueryTable#range}

---

###### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions.parameter.skipLeadingRows"></a>

- *Type:* typing.Union[int, float]

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#skip_leading_rows GoogleBigqueryTable#skip_leading_rows}

---

##### `put_hive_partitioning_options` <a name="put_hive_partitioning_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions"></a>

```python
def put_hive_partitioning_options(
  mode: str = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None,
  source_uri_prefix: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.mode"></a>

- *Type:* str

When set, what mode of hive partitioning to use when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#mode GoogleBigqueryTable#mode}

---

###### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.requirePartitionFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

###### `source_uri_prefix`<sup>Optional</sup> <a name="source_uri_prefix" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.sourceUriPrefix"></a>

- *Type:* str

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#source_uri_prefix GoogleBigqueryTable#source_uri_prefix}

---

##### `put_json_options` <a name="put_json_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putJsonOptions"></a>

```python
def put_json_options(
  encoding: str = None
) -> None
```

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putJsonOptions.parameter.encoding"></a>

- *Type:* str

The character encoding of the data.

The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

##### `put_parquet_options` <a name="put_parquet_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putParquetOptions"></a>

```python
def put_parquet_options(
  enable_list_inference: typing.Union[bool, IResolvable] = None,
  enum_as_string: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_list_inference`<sup>Optional</sup> <a name="enable_list_inference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putParquetOptions.parameter.enableListInference"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#enable_list_inference GoogleBigqueryTable#enable_list_inference}

---

###### `enum_as_string`<sup>Optional</sup> <a name="enum_as_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putParquetOptions.parameter.enumAsString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#enum_as_string GoogleBigqueryTable#enum_as_string}

---

##### `reset_avro_options` <a name="reset_avro_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions"></a>

```python
def reset_avro_options() -> None
```

##### `reset_bigtable_options` <a name="reset_bigtable_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetBigtableOptions"></a>

```python
def reset_bigtable_options() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_csv_options` <a name="reset_csv_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions"></a>

```python
def reset_csv_options() -> None
```

##### `reset_file_set_spec_type` <a name="reset_file_set_spec_type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType"></a>

```python
def reset_file_set_spec_type() -> None
```

##### `reset_google_sheets_options` <a name="reset_google_sheets_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions"></a>

```python
def reset_google_sheets_options() -> None
```

##### `reset_hive_partitioning_options` <a name="reset_hive_partitioning_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions"></a>

```python
def reset_hive_partitioning_options() -> None
```

##### `reset_ignore_unknown_values` <a name="reset_ignore_unknown_values" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues"></a>

```python
def reset_ignore_unknown_values() -> None
```

##### `reset_json_extension` <a name="reset_json_extension" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetJsonExtension"></a>

```python
def reset_json_extension() -> None
```

##### `reset_json_options` <a name="reset_json_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions"></a>

```python
def reset_json_options() -> None
```

##### `reset_max_bad_records` <a name="reset_max_bad_records" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords"></a>

```python
def reset_max_bad_records() -> None
```

##### `reset_metadata_cache_mode` <a name="reset_metadata_cache_mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode"></a>

```python
def reset_metadata_cache_mode() -> None
```

##### `reset_object_metadata` <a name="reset_object_metadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata"></a>

```python
def reset_object_metadata() -> None
```

##### `reset_parquet_options` <a name="reset_parquet_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions"></a>

```python
def reset_parquet_options() -> None
```

##### `reset_reference_file_schema_uri` <a name="reset_reference_file_schema_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri"></a>

```python
def reset_reference_file_schema_uri() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_source_format` <a name="reset_source_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat"></a>

```python
def reset_source_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions">avro_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions">bigtable_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions">google_sheets_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions">hive_partitioning_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput">autodetect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput">avro_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptionsInput">bigtable_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput">csv_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput">file_set_spec_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput">google_sheets_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput">hive_partitioning_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput">ignore_unknown_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtensionInput">json_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput">json_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput">max_bad_records_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput">metadata_cache_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput">object_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput">parquet_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput">reference_file_schema_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput">source_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput">source_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType">file_set_spec_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension">json_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode">metadata_cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata">object_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri">reference_file_schema_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro_options`<sup>Required</sup> <a name="avro_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions"></a>

```python
avro_options: GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a>

---

##### `bigtable_options`<sup>Required</sup> <a name="bigtable_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions"></a>

```python
bigtable_options: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference</a>

---

##### `csv_options`<sup>Required</sup> <a name="csv_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions"></a>

```python
csv_options: GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a>

---

##### `google_sheets_options`<sup>Required</sup> <a name="google_sheets_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions"></a>

```python
google_sheets_options: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a>

---

##### `hive_partitioning_options`<sup>Required</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions"></a>

```python
hive_partitioning_options: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a>

---

##### `json_options`<sup>Required</sup> <a name="json_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions"></a>

```python
json_options: GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a>

---

##### `parquet_options`<sup>Required</sup> <a name="parquet_options" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions"></a>

```python
parquet_options: GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a>

---

##### `autodetect_input`<sup>Optional</sup> <a name="autodetect_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput"></a>

```python
autodetect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `avro_options_input`<sup>Optional</sup> <a name="avro_options_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput"></a>

```python
avro_options_input: GoogleBigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

---

##### `bigtable_options_input`<sup>Optional</sup> <a name="bigtable_options_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptionsInput"></a>

```python
bigtable_options_input: GoogleBigqueryTableExternalDataConfigurationBigtableOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `csv_options_input`<sup>Optional</sup> <a name="csv_options_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput"></a>

```python
csv_options_input: GoogleBigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

---

##### `file_set_spec_type_input`<sup>Optional</sup> <a name="file_set_spec_type_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput"></a>

```python
file_set_spec_type_input: str
```

- *Type:* str

---

##### `google_sheets_options_input`<sup>Optional</sup> <a name="google_sheets_options_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput"></a>

```python
google_sheets_options_input: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---

##### `hive_partitioning_options_input`<sup>Optional</sup> <a name="hive_partitioning_options_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput"></a>

```python
hive_partitioning_options_input: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---

##### `ignore_unknown_values_input`<sup>Optional</sup> <a name="ignore_unknown_values_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput"></a>

```python
ignore_unknown_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_extension_input`<sup>Optional</sup> <a name="json_extension_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtensionInput"></a>

```python
json_extension_input: str
```

- *Type:* str

---

##### `json_options_input`<sup>Optional</sup> <a name="json_options_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput"></a>

```python
json_options_input: GoogleBigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

---

##### `max_bad_records_input`<sup>Optional</sup> <a name="max_bad_records_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput"></a>

```python
max_bad_records_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_cache_mode_input`<sup>Optional</sup> <a name="metadata_cache_mode_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput"></a>

```python
metadata_cache_mode_input: str
```

- *Type:* str

---

##### `object_metadata_input`<sup>Optional</sup> <a name="object_metadata_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput"></a>

```python
object_metadata_input: str
```

- *Type:* str

---

##### `parquet_options_input`<sup>Optional</sup> <a name="parquet_options_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput"></a>

```python
parquet_options_input: GoogleBigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

---

##### `reference_file_schema_uri_input`<sup>Optional</sup> <a name="reference_file_schema_uri_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput"></a>

```python
reference_file_schema_uri_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `source_format_input`<sup>Optional</sup> <a name="source_format_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput"></a>

```python
source_format_input: str
```

- *Type:* str

---

##### `source_uris_input`<sup>Optional</sup> <a name="source_uris_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput"></a>

```python
source_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `file_set_spec_type`<sup>Required</sup> <a name="file_set_spec_type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType"></a>

```python
file_set_spec_type: str
```

- *Type:* str

---

##### `ignore_unknown_values`<sup>Required</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_extension`<sup>Required</sup> <a name="json_extension" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension"></a>

```python
json_extension: str
```

- *Type:* str

---

##### `max_bad_records`<sup>Required</sup> <a name="max_bad_records" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_cache_mode`<sup>Required</sup> <a name="metadata_cache_mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode"></a>

```python
metadata_cache_mode: str
```

- *Type:* str

---

##### `object_metadata`<sup>Required</sup> <a name="object_metadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata"></a>

```python
object_metadata: str
```

- *Type:* str

---

##### `reference_file_schema_uri`<sup>Required</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri"></a>

```python
reference_file_schema_uri: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a>

---


### GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference">reset_enable_list_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString">reset_enum_as_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_list_inference` <a name="reset_enable_list_inference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference"></a>

```python
def reset_enable_list_inference() -> None
```

##### `reset_enum_as_string` <a name="reset_enum_as_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString"></a>

```python
def reset_enum_as_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput">enable_list_inference_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput">enum_as_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference">enable_list_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString">enum_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_list_inference_input`<sup>Optional</sup> <a name="enable_list_inference_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```python
enable_list_inference_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enum_as_string_input`<sup>Optional</sup> <a name="enum_as_string_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput"></a>

```python
enum_as_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_list_inference`<sup>Required</sup> <a name="enable_list_inference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference"></a>

```python
enable_list_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enum_as_string`<sup>Required</sup> <a name="enum_as_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString"></a>

```python
enum_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

---


### GoogleBigqueryTableMaterializedViewOutputReference <a name="GoogleBigqueryTableMaterializedViewOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition">reset_allow_non_incremental_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetEnableRefresh">reset_enable_refresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs">reset_refresh_interval_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_non_incremental_definition` <a name="reset_allow_non_incremental_definition" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition"></a>

```python
def reset_allow_non_incremental_definition() -> None
```

##### `reset_enable_refresh` <a name="reset_enable_refresh" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetEnableRefresh"></a>

```python
def reset_enable_refresh() -> None
```

##### `reset_refresh_interval_ms` <a name="reset_refresh_interval_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs"></a>

```python
def reset_refresh_interval_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput">allow_non_incremental_definition_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.enableRefreshInput">enable_refresh_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput">refresh_interval_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition">allow_non_incremental_definition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh">enable_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs">refresh_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_non_incremental_definition_input`<sup>Optional</sup> <a name="allow_non_incremental_definition_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput"></a>

```python
allow_non_incremental_definition_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_refresh_input`<sup>Optional</sup> <a name="enable_refresh_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.enableRefreshInput"></a>

```python
enable_refresh_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `refresh_interval_ms_input`<sup>Optional</sup> <a name="refresh_interval_ms_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput"></a>

```python
refresh_interval_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_non_incremental_definition`<sup>Required</sup> <a name="allow_non_incremental_definition" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition"></a>

```python
allow_non_incremental_definition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_refresh`<sup>Required</sup> <a name="enable_refresh" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh"></a>

```python
enable_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `refresh_interval_ms`<sup>Required</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs"></a>

```python
refresh_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a>

---


### GoogleBigqueryTableRangePartitioningOutputReference <a name="GoogleBigqueryTableRangePartitioningOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.putRange">put_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.putRange"></a>

```python
def put_range(
  end: typing.Union[int, float],
  interval: typing.Union[int, float],
  start: typing.Union[int, float]
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.putRange.parameter.end"></a>

- *Type:* typing.Union[int, float]

End of the range partitioning, exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#end GoogleBigqueryTable#end}

---

###### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.putRange.parameter.interval"></a>

- *Type:* typing.Union[int, float]

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#interval GoogleBigqueryTable#interval}

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.putRange.parameter.start"></a>

- *Type:* typing.Union[int, float]

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#start GoogleBigqueryTable#start}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference">GoogleBigqueryTableRangePartitioningRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.range"></a>

```python
range: GoogleBigqueryTableRangePartitioningRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference">GoogleBigqueryTableRangePartitioningRangeOutputReference</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.rangeInput"></a>

```python
range_input: GoogleBigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a>

---


### GoogleBigqueryTableRangePartitioningRangeOutputReference <a name="GoogleBigqueryTableRangePartitioningRangeOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a>

---


### GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference <a name="GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput">referenced_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput">referencing_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn">referenced_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn">referencing_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `referenced_column_input`<sup>Optional</sup> <a name="referenced_column_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput"></a>

```python
referenced_column_input: str
```

- *Type:* str

---

##### `referencing_column_input`<sup>Optional</sup> <a name="referencing_column_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput"></a>

```python
referencing_column_input: str
```

- *Type:* str

---

##### `referenced_column`<sup>Required</sup> <a name="referenced_column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn"></a>

```python
referenced_column: str
```

- *Type:* str

---

##### `referencing_column`<sup>Required</sup> <a name="referencing_column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn"></a>

```python
referencing_column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---


### GoogleBigqueryTableTableConstraintsForeignKeysList <a name="GoogleBigqueryTableTableConstraintsForeignKeysList" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryTableTableConstraintsForeignKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigqueryTableTableConstraintsForeignKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]]

---


### GoogleBigqueryTableTableConstraintsForeignKeysOutputReference <a name="GoogleBigqueryTableTableConstraintsForeignKeysOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences">put_column_references</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable">put_referenced_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_references` <a name="put_column_references" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences"></a>

```python
def put_column_references(
  referenced_column: str,
  referencing_column: str
) -> None
```

###### `referenced_column`<sup>Required</sup> <a name="referenced_column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences.parameter.referencedColumn"></a>

- *Type:* str

The column in the primary key that are referenced by the referencingColumn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#referenced_column GoogleBigqueryTable#referenced_column}

---

###### `referencing_column`<sup>Required</sup> <a name="referencing_column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences.parameter.referencingColumn"></a>

- *Type:* str

The column that composes the foreign key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#referencing_column GoogleBigqueryTable#referencing_column}

---

##### `put_referenced_table` <a name="put_referenced_table" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable"></a>

```python
def put_referenced_table(
  dataset_id: str,
  project_id: str,
  table_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#dataset_id GoogleBigqueryTable#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#project_id GoogleBigqueryTable#project_id}

---

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.tableId"></a>

- *Type:* str

The ID of the table.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#table_id GoogleBigqueryTable#table_id}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences">column_references</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable">referenced_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput">column_references_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput">referenced_table_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_references`<sup>Required</sup> <a name="column_references" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences"></a>

```python
column_references: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a>

---

##### `referenced_table`<sup>Required</sup> <a name="referenced_table" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable"></a>

```python
referenced_table: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a>

---

##### `column_references_input`<sup>Optional</sup> <a name="column_references_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput"></a>

```python
column_references_input: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `referenced_table_input`<sup>Optional</sup> <a name="referenced_table_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput"></a>

```python
referenced_table_input: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryTableTableConstraintsForeignKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]

---


### GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference <a name="GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---


### GoogleBigqueryTableTableConstraintsOutputReference <a name="GoogleBigqueryTableTableConstraintsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putForeignKeys">put_foreign_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putPrimaryKey">put_primary_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resetForeignKeys">reset_foreign_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resetPrimaryKey">reset_primary_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_foreign_keys` <a name="put_foreign_keys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putForeignKeys"></a>

```python
def put_foreign_keys(
  value: typing.Union[IResolvable, typing.List[GoogleBigqueryTableTableConstraintsForeignKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putForeignKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]]

---

##### `put_primary_key` <a name="put_primary_key" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putPrimaryKey"></a>

```python
def put_primary_key(
  columns: typing.List[str]
) -> None
```

###### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putPrimaryKey.parameter.columns"></a>

- *Type:* typing.List[str]

The columns that are composed of the primary key constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_table#columns GoogleBigqueryTable#columns}

---

##### `reset_foreign_keys` <a name="reset_foreign_keys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resetForeignKeys"></a>

```python
def reset_foreign_keys() -> None
```

##### `reset_primary_key` <a name="reset_primary_key" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resetPrimaryKey"></a>

```python
def reset_primary_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys">foreign_keys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList">GoogleBigqueryTableTableConstraintsForeignKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey">primary_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference">GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeysInput">foreign_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `foreign_keys`<sup>Required</sup> <a name="foreign_keys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys"></a>

```python
foreign_keys: GoogleBigqueryTableTableConstraintsForeignKeysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList">GoogleBigqueryTableTableConstraintsForeignKeysList</a>

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey"></a>

```python
primary_key: GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference">GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference</a>

---

##### `foreign_keys_input`<sup>Optional</sup> <a name="foreign_keys_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeysInput"></a>

```python
foreign_keys_input: typing.Union[IResolvable, typing.List[GoogleBigqueryTableTableConstraintsForeignKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys">GoogleBigqueryTableTableConstraintsForeignKeys</a>]]

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: GoogleBigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a>

---


### GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference <a name="GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a>

---


### GoogleBigqueryTableTableReplicationInfoOutputReference <a name="GoogleBigqueryTableTableReplicationInfoOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs">reset_replication_interval_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replication_interval_ms` <a name="reset_replication_interval_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs"></a>

```python
def reset_replication_interval_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput">replication_interval_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput">source_dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput">source_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput">source_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs">replication_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId">source_dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId">source_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId">source_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replication_interval_ms_input`<sup>Optional</sup> <a name="replication_interval_ms_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput"></a>

```python
replication_interval_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_dataset_id_input`<sup>Optional</sup> <a name="source_dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput"></a>

```python
source_dataset_id_input: str
```

- *Type:* str

---

##### `source_project_id_input`<sup>Optional</sup> <a name="source_project_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput"></a>

```python
source_project_id_input: str
```

- *Type:* str

---

##### `source_table_id_input`<sup>Optional</sup> <a name="source_table_id_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput"></a>

```python
source_table_id_input: str
```

- *Type:* str

---

##### `replication_interval_ms`<sup>Required</sup> <a name="replication_interval_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs"></a>

```python
replication_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_dataset_id`<sup>Required</sup> <a name="source_dataset_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId"></a>

```python
source_dataset_id: str
```

- *Type:* str

---

##### `source_project_id`<sup>Required</sup> <a name="source_project_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId"></a>

```python
source_project_id: str
```

- *Type:* str

---

##### `source_table_id`<sup>Required</sup> <a name="source_table_id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId"></a>

```python
source_table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a>

---


### GoogleBigqueryTableTimePartitioningOutputReference <a name="GoogleBigqueryTableTimePartitioningOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetExpirationMs">reset_expiration_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter">reset_require_partition_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_ms` <a name="reset_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetExpirationMs"></a>

```python
def reset_expiration_ms() -> None
```

##### `reset_field` <a name="reset_field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_require_partition_filter` <a name="reset_require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter"></a>

```python
def reset_require_partition_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.expirationMsInput">expiration_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput">require_partition_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs">expiration_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_ms_input`<sup>Optional</sup> <a name="expiration_ms_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.expirationMsInput"></a>

```python
expiration_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `require_partition_filter_input`<sup>Optional</sup> <a name="require_partition_filter_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput"></a>

```python
require_partition_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expiration_ms`<sup>Required</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs"></a>

```python
expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a>

---


### GoogleBigqueryTableViewOutputReference <a name="GoogleBigqueryTableViewOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_table

googleBigqueryTable.GoogleBigqueryTableViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resetUseLegacySql">reset_use_legacy_sql</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_legacy_sql` <a name="reset_use_legacy_sql" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resetUseLegacySql"></a>

```python
def reset_use_legacy_sql() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.useLegacySqlInput">use_legacy_sql_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.useLegacySql">use_legacy_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `use_legacy_sql_input`<sup>Optional</sup> <a name="use_legacy_sql_input" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.useLegacySqlInput"></a>

```python
use_legacy_sql_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `use_legacy_sql`<sup>Required</sup> <a name="use_legacy_sql" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a>

---



