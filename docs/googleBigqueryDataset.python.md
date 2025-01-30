# `googleBigqueryDataset` Submodule <a name="`googleBigqueryDataset` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDataset <a name="GoogleBigqueryDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset google_bigquery_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDataset(
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
  access: typing.Union[IResolvable, typing.List[GoogleBigqueryDatasetAccess]] = None,
  default_collation: str = None,
  default_encryption_configuration: GoogleBigqueryDatasetDefaultEncryptionConfiguration = None,
  default_partition_expiration_ms: typing.Union[int, float] = None,
  default_table_expiration_ms: typing.Union[int, float] = None,
  delete_contents_on_destroy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  external_catalog_dataset_options: GoogleBigqueryDatasetExternalCatalogDatasetOptions = None,
  external_dataset_reference: GoogleBigqueryDatasetExternalDatasetReference = None,
  friendly_name: str = None,
  id: str = None,
  is_case_insensitive: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  max_time_travel_hours: str = None,
  project: str = None,
  resource_tags: typing.Mapping[str] = None,
  storage_billing_model: str = None,
  timeouts: GoogleBigqueryDatasetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.access">access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]</code> | access block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.defaultCollation">default_collation</a></code> | <code>str</code> | Defines the default collation specification of future tables created in the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.defaultEncryptionConfiguration">default_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | default_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.defaultPartitionExpirationMs">default_partition_expiration_ms</a></code> | <code>typing.Union[int, float]</code> | The default partition expiration for all partitioned tables in the dataset, in milliseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.defaultTableExpirationMs">default_table_expiration_ms</a></code> | <code>typing.Union[int, float]</code> | The default lifetime of all tables in the dataset, in milliseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.deleteContentsOnDestroy">delete_contents_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', delete all the tables in the dataset when destroying the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.description">description</a></code> | <code>str</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.externalCatalogDatasetOptions">external_catalog_dataset_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions">GoogleBigqueryDatasetExternalCatalogDatasetOptions</a></code> | external_catalog_dataset_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.externalDatasetReference">external_dataset_reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference">GoogleBigqueryDatasetExternalDatasetReference</a></code> | external_dataset_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#id GoogleBigqueryDataset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.isCaseInsensitive">is_case_insensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the dataset should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.maxTimeTravelHours">max_time_travel_hours</a></code> | <code>str</code> | Defines the time travel window in hours. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project GoogleBigqueryDataset#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | The tags attached to this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.storageBillingModel">storage_billing_model</a></code> | <code>str</code> | Specifies the storage billing model for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.datasetId"></a>

- *Type:* str

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.access"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#access GoogleBigqueryDataset#access}

---

##### `default_collation`<sup>Optional</sup> <a name="default_collation" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.defaultCollation"></a>

- *Type:* str

Defines the default collation specification of future tables created in the dataset.

If a table is created in this dataset without table-level
default collation, then the table inherits the dataset default collation,
which is applied to the string fields that do not have explicit collation
specified. A change to this field affects only tables created afterwards,
and does not alter the existing tables.

The following values are supported:

* 'und:ci': undetermined locale, case insensitive.
* '': empty string. Default to case-sensitive behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_collation GoogleBigqueryDataset#default_collation}

---

##### `default_encryption_configuration`<sup>Optional</sup> <a name="default_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.defaultEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

default_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_encryption_configuration GoogleBigqueryDataset#default_encryption_configuration}

---

##### `default_partition_expiration_ms`<sup>Optional</sup> <a name="default_partition_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.defaultPartitionExpirationMs"></a>

- *Type:* typing.Union[int, float]

The default partition expiration for all partitioned tables in the dataset, in milliseconds.

Once this property is set, all newly-created partitioned tables in
the dataset will have an 'expirationMs' property in the 'timePartitioning'
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of 'defaultTableExpirationMs'
for partitioned tables: only one of 'defaultTableExpirationMs' and
'defaultPartitionExpirationMs' will be used for any new partitioned
table. If you provide an explicit 'timePartitioning.expirationMs' when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_partition_expiration_ms GoogleBigqueryDataset#default_partition_expiration_ms}

---

##### `default_table_expiration_ms`<sup>Optional</sup> <a name="default_table_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.defaultTableExpirationMs"></a>

- *Type:* typing.Union[int, float]

The default lifetime of all tables in the dataset, in milliseconds.

The minimum value is 3600000 milliseconds (one hour).
Once this property is set, all newly-created tables in the dataset
will have an 'expirationTime' property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the 'expirationTime' for a given
table is reached, that table will be deleted automatically.
If a table's 'expirationTime' is modified or removed before the
table expires, or if you provide an explicit 'expirationTime' when
creating a table, that value takes precedence over the default
expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_table_expiration_ms GoogleBigqueryDataset#default_table_expiration_ms}

---

##### `delete_contents_on_destroy`<sup>Optional</sup> <a name="delete_contents_on_destroy" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.deleteContentsOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', delete all the tables in the dataset when destroying the resource;

otherwise,
destroying the resource will fail if tables are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#delete_contents_on_destroy GoogleBigqueryDataset#delete_contents_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.description"></a>

- *Type:* str

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#description GoogleBigqueryDataset#description}

---

##### `external_catalog_dataset_options`<sup>Optional</sup> <a name="external_catalog_dataset_options" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.externalCatalogDatasetOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions">GoogleBigqueryDatasetExternalCatalogDatasetOptions</a>

external_catalog_dataset_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#external_catalog_dataset_options GoogleBigqueryDataset#external_catalog_dataset_options}

---

##### `external_dataset_reference`<sup>Optional</sup> <a name="external_dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.externalDatasetReference"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference">GoogleBigqueryDatasetExternalDatasetReference</a>

external_dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#external_dataset_reference GoogleBigqueryDataset#external_dataset_reference}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.friendlyName"></a>

- *Type:* str

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#friendly_name GoogleBigqueryDataset#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#id GoogleBigqueryDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_case_insensitive`<sup>Optional</sup> <a name="is_case_insensitive" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.isCaseInsensitive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.

By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#is_case_insensitive GoogleBigqueryDataset#is_case_insensitive}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this dataset. You can use these to organize and group your datasets.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#labels GoogleBigqueryDataset#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the dataset should reside.

See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).
There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.
The default value is multi-regional location 'US'.
Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#location GoogleBigqueryDataset#location}

---

##### `max_time_travel_hours`<sup>Optional</sup> <a name="max_time_travel_hours" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.maxTimeTravelHours"></a>

- *Type:* str

Defines the time travel window in hours.

The value can be from 48 to 168 hours (2 to 7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#max_time_travel_hours GoogleBigqueryDataset#max_time_travel_hours}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project GoogleBigqueryDataset#project}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.resourceTags"></a>

- *Type:* typing.Mapping[str]

The tags attached to this table.

Tag keys are globally unique. Tag key is expected to be
in the namespaced format, for example "123456789012/environment" where 123456789012 is the
ID of the parent organization or project resource for this tag key. Tag value is expected
to be the short name, for example "Production". See [Tag definitions](/iam/docs/tags-access-control#definitions)
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#resource_tags GoogleBigqueryDataset#resource_tags}

---

##### `storage_billing_model`<sup>Optional</sup> <a name="storage_billing_model" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.storageBillingModel"></a>

- *Type:* str

Specifies the storage billing model for the dataset.

Set this flag value to LOGICAL to use logical bytes for storage billing,
or to PHYSICAL to use physical bytes instead.

LOGICAL is the default if this flag isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#storage_billing_model GoogleBigqueryDataset#storage_billing_model}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#timeouts GoogleBigqueryDataset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putAccess">put_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putDefaultEncryptionConfiguration">put_default_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putExternalCatalogDatasetOptions">put_external_catalog_dataset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putExternalDatasetReference">put_external_dataset_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultCollation">reset_default_collation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultEncryptionConfiguration">reset_default_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultPartitionExpirationMs">reset_default_partition_expiration_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultTableExpirationMs">reset_default_table_expiration_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDeleteContentsOnDestroy">reset_delete_contents_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetExternalCatalogDatasetOptions">reset_external_catalog_dataset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetExternalDatasetReference">reset_external_dataset_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetIsCaseInsensitive">reset_is_case_insensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetMaxTimeTravelHours">reset_max_time_travel_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetStorageBillingModel">reset_storage_billing_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access` <a name="put_access" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putAccess"></a>

```python
def put_access(
  value: typing.Union[IResolvable, typing.List[GoogleBigqueryDatasetAccess]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putAccess.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]

---

##### `put_default_encryption_configuration` <a name="put_default_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putDefaultEncryptionConfiguration"></a>

```python
def put_default_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putDefaultEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires
access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#kms_key_name GoogleBigqueryDataset#kms_key_name}

---

##### `put_external_catalog_dataset_options` <a name="put_external_catalog_dataset_options" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putExternalCatalogDatasetOptions"></a>

```python
def put_external_catalog_dataset_options(
  default_storage_location_uri: str = None,
  parameters: typing.Mapping[str] = None
) -> None
```

###### `default_storage_location_uri`<sup>Optional</sup> <a name="default_storage_location_uri" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putExternalCatalogDatasetOptions.parameter.defaultStorageLocationUri"></a>

- *Type:* str

The storage location URI for all tables in the dataset.

Equivalent to hive metastore's
database locationUri. Maximum length of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_storage_location_uri GoogleBigqueryDataset#default_storage_location_uri}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putExternalCatalogDatasetOptions.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

A map of key value pairs defining the parameters and properties of the open source schema. Maximum size of 2Mib.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#parameters GoogleBigqueryDataset#parameters}

---

##### `put_external_dataset_reference` <a name="put_external_dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putExternalDatasetReference"></a>

```python
def put_external_dataset_reference(
  connection: str,
  external_source: str
) -> None
```

###### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putExternalDatasetReference.parameter.connection"></a>

- *Type:* str

The connection id that is used to access the externalSource. Format: projects/{projectId}/locations/{locationId}/connections/{connectionId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#connection GoogleBigqueryDataset#connection}

---

###### `external_source`<sup>Required</sup> <a name="external_source" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putExternalDatasetReference.parameter.externalSource"></a>

- *Type:* str

External source that backs this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#external_source GoogleBigqueryDataset#external_source}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#create GoogleBigqueryDataset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#delete GoogleBigqueryDataset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#update GoogleBigqueryDataset#update}.

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_default_collation` <a name="reset_default_collation" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultCollation"></a>

```python
def reset_default_collation() -> None
```

##### `reset_default_encryption_configuration` <a name="reset_default_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultEncryptionConfiguration"></a>

```python
def reset_default_encryption_configuration() -> None
```

##### `reset_default_partition_expiration_ms` <a name="reset_default_partition_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultPartitionExpirationMs"></a>

```python
def reset_default_partition_expiration_ms() -> None
```

##### `reset_default_table_expiration_ms` <a name="reset_default_table_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultTableExpirationMs"></a>

```python
def reset_default_table_expiration_ms() -> None
```

##### `reset_delete_contents_on_destroy` <a name="reset_delete_contents_on_destroy" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDeleteContentsOnDestroy"></a>

```python
def reset_delete_contents_on_destroy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_catalog_dataset_options` <a name="reset_external_catalog_dataset_options" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetExternalCatalogDatasetOptions"></a>

```python
def reset_external_catalog_dataset_options() -> None
```

##### `reset_external_dataset_reference` <a name="reset_external_dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetExternalDatasetReference"></a>

```python
def reset_external_dataset_reference() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_case_insensitive` <a name="reset_is_case_insensitive" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetIsCaseInsensitive"></a>

```python
def reset_is_case_insensitive() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_max_time_travel_hours` <a name="reset_max_time_travel_hours" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetMaxTimeTravelHours"></a>

```python
def reset_max_time_travel_hours() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_storage_billing_model` <a name="reset_storage_billing_model" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetStorageBillingModel"></a>

```python
def reset_storage_billing_model() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryDataset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.access">access</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList">GoogleBigqueryDatasetAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultEncryptionConfiguration">default_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference">GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.externalCatalogDatasetOptions">external_catalog_dataset_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference">GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.externalDatasetReference">external_dataset_reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference">GoogleBigqueryDatasetExternalDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference">GoogleBigqueryDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.accessInput">access_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultCollationInput">default_collation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultEncryptionConfigurationInput">default_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultPartitionExpirationMsInput">default_partition_expiration_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultTableExpirationMsInput">default_table_expiration_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.deleteContentsOnDestroyInput">delete_contents_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.externalCatalogDatasetOptionsInput">external_catalog_dataset_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions">GoogleBigqueryDatasetExternalCatalogDatasetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.externalDatasetReferenceInput">external_dataset_reference_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference">GoogleBigqueryDatasetExternalDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.isCaseInsensitiveInput">is_case_insensitive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.maxTimeTravelHoursInput">max_time_travel_hours_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.storageBillingModelInput">storage_billing_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultCollation">default_collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultPartitionExpirationMs">default_partition_expiration_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultTableExpirationMs">default_table_expiration_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.deleteContentsOnDestroy">delete_contents_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.isCaseInsensitive">is_case_insensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.maxTimeTravelHours">max_time_travel_hours</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.storageBillingModel">storage_billing_model</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.access"></a>

```python
access: GoogleBigqueryDatasetAccessList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList">GoogleBigqueryDatasetAccessList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_encryption_configuration`<sup>Required</sup> <a name="default_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultEncryptionConfiguration"></a>

```python
default_encryption_configuration: GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference">GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `external_catalog_dataset_options`<sup>Required</sup> <a name="external_catalog_dataset_options" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.externalCatalogDatasetOptions"></a>

```python
external_catalog_dataset_options: GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference">GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference</a>

---

##### `external_dataset_reference`<sup>Required</sup> <a name="external_dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.externalDatasetReference"></a>

```python
external_dataset_reference: GoogleBigqueryDatasetExternalDatasetReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference">GoogleBigqueryDatasetExternalDatasetReferenceOutputReference</a>

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.timeouts"></a>

```python
timeouts: GoogleBigqueryDatasetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference">GoogleBigqueryDatasetTimeoutsOutputReference</a>

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.accessInput"></a>

```python
access_input: typing.Union[IResolvable, typing.List[GoogleBigqueryDatasetAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `default_collation_input`<sup>Optional</sup> <a name="default_collation_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultCollationInput"></a>

```python
default_collation_input: str
```

- *Type:* str

---

##### `default_encryption_configuration_input`<sup>Optional</sup> <a name="default_encryption_configuration_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultEncryptionConfigurationInput"></a>

```python
default_encryption_configuration_input: GoogleBigqueryDatasetDefaultEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

---

##### `default_partition_expiration_ms_input`<sup>Optional</sup> <a name="default_partition_expiration_ms_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultPartitionExpirationMsInput"></a>

```python
default_partition_expiration_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_table_expiration_ms_input`<sup>Optional</sup> <a name="default_table_expiration_ms_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultTableExpirationMsInput"></a>

```python
default_table_expiration_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_contents_on_destroy_input`<sup>Optional</sup> <a name="delete_contents_on_destroy_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.deleteContentsOnDestroyInput"></a>

```python
delete_contents_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_catalog_dataset_options_input`<sup>Optional</sup> <a name="external_catalog_dataset_options_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.externalCatalogDatasetOptionsInput"></a>

```python
external_catalog_dataset_options_input: GoogleBigqueryDatasetExternalCatalogDatasetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions">GoogleBigqueryDatasetExternalCatalogDatasetOptions</a>

---

##### `external_dataset_reference_input`<sup>Optional</sup> <a name="external_dataset_reference_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.externalDatasetReferenceInput"></a>

```python
external_dataset_reference_input: GoogleBigqueryDatasetExternalDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference">GoogleBigqueryDatasetExternalDatasetReference</a>

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_case_insensitive_input`<sup>Optional</sup> <a name="is_case_insensitive_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.isCaseInsensitiveInput"></a>

```python
is_case_insensitive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_time_travel_hours_input`<sup>Optional</sup> <a name="max_time_travel_hours_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.maxTimeTravelHoursInput"></a>

```python
max_time_travel_hours_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `storage_billing_model_input`<sup>Optional</sup> <a name="storage_billing_model_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.storageBillingModelInput"></a>

```python
storage_billing_model_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigqueryDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a>]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `default_collation`<sup>Required</sup> <a name="default_collation" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultCollation"></a>

```python
default_collation: str
```

- *Type:* str

---

##### `default_partition_expiration_ms`<sup>Required</sup> <a name="default_partition_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultPartitionExpirationMs"></a>

```python
default_partition_expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_table_expiration_ms`<sup>Required</sup> <a name="default_table_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultTableExpirationMs"></a>

```python
default_table_expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_contents_on_destroy`<sup>Required</sup> <a name="delete_contents_on_destroy" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.deleteContentsOnDestroy"></a>

```python
delete_contents_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_case_insensitive`<sup>Required</sup> <a name="is_case_insensitive" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.isCaseInsensitive"></a>

```python
is_case_insensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_time_travel_hours`<sup>Required</sup> <a name="max_time_travel_hours" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.maxTimeTravelHours"></a>

```python
max_time_travel_hours: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `storage_billing_model`<sup>Required</sup> <a name="storage_billing_model" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.storageBillingModel"></a>

```python
storage_billing_model: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatasetAccess <a name="GoogleBigqueryDatasetAccess" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccess(
  condition: GoogleBigqueryDatasetAccessCondition = None,
  dataset: GoogleBigqueryDatasetAccessDataset = None,
  domain: str = None,
  group_by_email: str = None,
  iam_member: str = None,
  role: str = None,
  routine: GoogleBigqueryDatasetAccessRoutine = None,
  special_group: str = None,
  user_by_email: str = None,
  view: GoogleBigqueryDatasetAccessView = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition">GoogleBigqueryDatasetAccessCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.domain">domain</a></code> | <code>str</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.groupByEmail">group_by_email</a></code> | <code>str</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.iamMember">iam_member</a></code> | <code>str</code> | Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.role">role</a></code> | <code>str</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.specialGroup">special_group</a></code> | <code>str</code> | A special group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.userByEmail">user_by_email</a></code> | <code>str</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a></code> | view block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.condition"></a>

```python
condition: GoogleBigqueryDatasetAccessCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition">GoogleBigqueryDatasetAccessCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#condition GoogleBigqueryDataset#condition}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.dataset"></a>

```python
dataset: GoogleBigqueryDatasetAccessDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset GoogleBigqueryDataset#dataset}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.domain"></a>

```python
domain: str
```

- *Type:* str

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#domain GoogleBigqueryDataset#domain}

---

##### `group_by_email`<sup>Optional</sup> <a name="group_by_email" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.groupByEmail"></a>

```python
group_by_email: str
```

- *Type:* str

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#group_by_email GoogleBigqueryDataset#group_by_email}

---

##### `iam_member`<sup>Optional</sup> <a name="iam_member" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.iamMember"></a>

```python
iam_member: str
```

- *Type:* str

Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.

For example: 'allUsers'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#iam_member GoogleBigqueryDataset#iam_member}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.role"></a>

```python
role: str
```

- *Type:* str

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#role GoogleBigqueryDataset#role}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.routine"></a>

```python
routine: GoogleBigqueryDatasetAccessRoutine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#routine GoogleBigqueryDataset#routine}

---

##### `special_group`<sup>Optional</sup> <a name="special_group" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.specialGroup"></a>

```python
special_group: str
```

- *Type:* str

A special group to grant access to.

Possible values include:

* 'projectOwners': Owners of the enclosing project.
* 'projectReaders': Readers of the enclosing project.
* 'projectWriters': Writers of the enclosing project.
* 'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#special_group GoogleBigqueryDataset#special_group}

---

##### `user_by_email`<sup>Optional</sup> <a name="user_by_email" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.userByEmail"></a>

```python
user_by_email: str
```

- *Type:* str

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#user_by_email GoogleBigqueryDataset#user_by_email}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.view"></a>

```python
view: GoogleBigqueryDatasetAccessView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#view GoogleBigqueryDataset#view}

---

### GoogleBigqueryDatasetAccessCondition <a name="GoogleBigqueryDatasetAccessCondition" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#expression GoogleBigqueryDataset#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#description GoogleBigqueryDataset#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#location GoogleBigqueryDataset#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#title GoogleBigqueryDataset#title}

---

### GoogleBigqueryDatasetAccessDataset <a name="GoogleBigqueryDatasetAccessDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset(
  dataset: GoogleBigqueryDatasetAccessDatasetDataset,
  target_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.property.targetTypes">target_types</a></code> | <code>typing.List[str]</code> | Which resources in the dataset this entry applies to. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.property.dataset"></a>

```python
dataset: GoogleBigqueryDatasetAccessDatasetDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset GoogleBigqueryDataset#dataset}

---

##### `target_types`<sup>Required</sup> <a name="target_types" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.property.targetTypes"></a>

```python
target_types: typing.List[str]
```

- *Type:* typing.List[str]

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#target_types GoogleBigqueryDataset#target_types}

---

### GoogleBigqueryDatasetAccessDatasetDataset <a name="GoogleBigqueryDatasetAccessDatasetDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset(
  dataset_id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---

### GoogleBigqueryDatasetAccessRoutine <a name="GoogleBigqueryDatasetAccessRoutine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine(
  dataset_id: str,
  project_id: str,
  routine_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.routineId">routine_id</a></code> | <code>str</code> | The ID of the routine. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#routine_id GoogleBigqueryDataset#routine_id}

---

### GoogleBigqueryDatasetAccessView <a name="GoogleBigqueryDatasetAccessView" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessView(
  dataset_id: str,
  project_id: str,
  table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.tableId">table_id</a></code> | <code>str</code> | The ID of the table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#table_id GoogleBigqueryDataset#table_id}

---

### GoogleBigqueryDatasetConfig <a name="GoogleBigqueryDatasetConfig" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  access: typing.Union[IResolvable, typing.List[GoogleBigqueryDatasetAccess]] = None,
  default_collation: str = None,
  default_encryption_configuration: GoogleBigqueryDatasetDefaultEncryptionConfiguration = None,
  default_partition_expiration_ms: typing.Union[int, float] = None,
  default_table_expiration_ms: typing.Union[int, float] = None,
  delete_contents_on_destroy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  external_catalog_dataset_options: GoogleBigqueryDatasetExternalCatalogDatasetOptions = None,
  external_dataset_reference: GoogleBigqueryDatasetExternalDatasetReference = None,
  friendly_name: str = None,
  id: str = None,
  is_case_insensitive: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  max_time_travel_hours: str = None,
  project: str = None,
  resource_tags: typing.Mapping[str] = None,
  storage_billing_model: str = None,
  timeouts: GoogleBigqueryDatasetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.access">access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]</code> | access block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultCollation">default_collation</a></code> | <code>str</code> | Defines the default collation specification of future tables created in the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultEncryptionConfiguration">default_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | default_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultPartitionExpirationMs">default_partition_expiration_ms</a></code> | <code>typing.Union[int, float]</code> | The default partition expiration for all partitioned tables in the dataset, in milliseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultTableExpirationMs">default_table_expiration_ms</a></code> | <code>typing.Union[int, float]</code> | The default lifetime of all tables in the dataset, in milliseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.deleteContentsOnDestroy">delete_contents_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', delete all the tables in the dataset when destroying the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.description">description</a></code> | <code>str</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.externalCatalogDatasetOptions">external_catalog_dataset_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions">GoogleBigqueryDatasetExternalCatalogDatasetOptions</a></code> | external_catalog_dataset_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.externalDatasetReference">external_dataset_reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference">GoogleBigqueryDatasetExternalDatasetReference</a></code> | external_dataset_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#id GoogleBigqueryDataset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.isCaseInsensitive">is_case_insensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the dataset should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.maxTimeTravelHours">max_time_travel_hours</a></code> | <code>str</code> | Defines the time travel window in hours. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project GoogleBigqueryDataset#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | The tags attached to this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.storageBillingModel">storage_billing_model</a></code> | <code>str</code> | Specifies the storage billing model for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.access"></a>

```python
access: typing.Union[IResolvable, typing.List[GoogleBigqueryDatasetAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#access GoogleBigqueryDataset#access}

---

##### `default_collation`<sup>Optional</sup> <a name="default_collation" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultCollation"></a>

```python
default_collation: str
```

- *Type:* str

Defines the default collation specification of future tables created in the dataset.

If a table is created in this dataset without table-level
default collation, then the table inherits the dataset default collation,
which is applied to the string fields that do not have explicit collation
specified. A change to this field affects only tables created afterwards,
and does not alter the existing tables.

The following values are supported:

* 'und:ci': undetermined locale, case insensitive.
* '': empty string. Default to case-sensitive behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_collation GoogleBigqueryDataset#default_collation}

---

##### `default_encryption_configuration`<sup>Optional</sup> <a name="default_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultEncryptionConfiguration"></a>

```python
default_encryption_configuration: GoogleBigqueryDatasetDefaultEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

default_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_encryption_configuration GoogleBigqueryDataset#default_encryption_configuration}

---

##### `default_partition_expiration_ms`<sup>Optional</sup> <a name="default_partition_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultPartitionExpirationMs"></a>

```python
default_partition_expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default partition expiration for all partitioned tables in the dataset, in milliseconds.

Once this property is set, all newly-created partitioned tables in
the dataset will have an 'expirationMs' property in the 'timePartitioning'
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of 'defaultTableExpirationMs'
for partitioned tables: only one of 'defaultTableExpirationMs' and
'defaultPartitionExpirationMs' will be used for any new partitioned
table. If you provide an explicit 'timePartitioning.expirationMs' when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_partition_expiration_ms GoogleBigqueryDataset#default_partition_expiration_ms}

---

##### `default_table_expiration_ms`<sup>Optional</sup> <a name="default_table_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultTableExpirationMs"></a>

```python
default_table_expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default lifetime of all tables in the dataset, in milliseconds.

The minimum value is 3600000 milliseconds (one hour).
Once this property is set, all newly-created tables in the dataset
will have an 'expirationTime' property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the 'expirationTime' for a given
table is reached, that table will be deleted automatically.
If a table's 'expirationTime' is modified or removed before the
table expires, or if you provide an explicit 'expirationTime' when
creating a table, that value takes precedence over the default
expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_table_expiration_ms GoogleBigqueryDataset#default_table_expiration_ms}

---

##### `delete_contents_on_destroy`<sup>Optional</sup> <a name="delete_contents_on_destroy" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.deleteContentsOnDestroy"></a>

```python
delete_contents_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', delete all the tables in the dataset when destroying the resource;

otherwise,
destroying the resource will fail if tables are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#delete_contents_on_destroy GoogleBigqueryDataset#delete_contents_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#description GoogleBigqueryDataset#description}

---

##### `external_catalog_dataset_options`<sup>Optional</sup> <a name="external_catalog_dataset_options" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.externalCatalogDatasetOptions"></a>

```python
external_catalog_dataset_options: GoogleBigqueryDatasetExternalCatalogDatasetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions">GoogleBigqueryDatasetExternalCatalogDatasetOptions</a>

external_catalog_dataset_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#external_catalog_dataset_options GoogleBigqueryDataset#external_catalog_dataset_options}

---

##### `external_dataset_reference`<sup>Optional</sup> <a name="external_dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.externalDatasetReference"></a>

```python
external_dataset_reference: GoogleBigqueryDatasetExternalDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference">GoogleBigqueryDatasetExternalDatasetReference</a>

external_dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#external_dataset_reference GoogleBigqueryDataset#external_dataset_reference}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#friendly_name GoogleBigqueryDataset#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#id GoogleBigqueryDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_case_insensitive`<sup>Optional</sup> <a name="is_case_insensitive" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.isCaseInsensitive"></a>

```python
is_case_insensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.

By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#is_case_insensitive GoogleBigqueryDataset#is_case_insensitive}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this dataset. You can use these to organize and group your datasets.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#labels GoogleBigqueryDataset#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the dataset should reside.

See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).
There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.
The default value is multi-regional location 'US'.
Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#location GoogleBigqueryDataset#location}

---

##### `max_time_travel_hours`<sup>Optional</sup> <a name="max_time_travel_hours" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.maxTimeTravelHours"></a>

```python
max_time_travel_hours: str
```

- *Type:* str

Defines the time travel window in hours.

The value can be from 48 to 168 hours (2 to 7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#max_time_travel_hours GoogleBigqueryDataset#max_time_travel_hours}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project GoogleBigqueryDataset#project}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags attached to this table.

Tag keys are globally unique. Tag key is expected to be
in the namespaced format, for example "123456789012/environment" where 123456789012 is the
ID of the parent organization or project resource for this tag key. Tag value is expected
to be the short name, for example "Production". See [Tag definitions](/iam/docs/tags-access-control#definitions)
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#resource_tags GoogleBigqueryDataset#resource_tags}

---

##### `storage_billing_model`<sup>Optional</sup> <a name="storage_billing_model" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.storageBillingModel"></a>

```python
storage_billing_model: str
```

- *Type:* str

Specifies the storage billing model for the dataset.

Set this flag value to LOGICAL to use logical bytes for storage billing,
or to PHYSICAL to use physical bytes instead.

LOGICAL is the default if this flag isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#storage_billing_model GoogleBigqueryDataset#storage_billing_model}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryDatasetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#timeouts GoogleBigqueryDataset#timeouts}

---

### GoogleBigqueryDatasetDefaultEncryptionConfiguration <a name="GoogleBigqueryDatasetDefaultEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires
access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#kms_key_name GoogleBigqueryDataset#kms_key_name}

---

### GoogleBigqueryDatasetExternalCatalogDatasetOptions <a name="GoogleBigqueryDatasetExternalCatalogDatasetOptions" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions(
  default_storage_location_uri: str = None,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions.property.defaultStorageLocationUri">default_storage_location_uri</a></code> | <code>str</code> | The storage location URI for all tables in the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | A map of key value pairs defining the parameters and properties of the open source schema. Maximum size of 2Mib. |

---

##### `default_storage_location_uri`<sup>Optional</sup> <a name="default_storage_location_uri" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions.property.defaultStorageLocationUri"></a>

```python
default_storage_location_uri: str
```

- *Type:* str

The storage location URI for all tables in the dataset.

Equivalent to hive metastore's
database locationUri. Maximum length of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#default_storage_location_uri GoogleBigqueryDataset#default_storage_location_uri}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key value pairs defining the parameters and properties of the open source schema. Maximum size of 2Mib.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#parameters GoogleBigqueryDataset#parameters}

---

### GoogleBigqueryDatasetExternalDatasetReference <a name="GoogleBigqueryDatasetExternalDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference(
  connection: str,
  external_source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference.property.connection">connection</a></code> | <code>str</code> | The connection id that is used to access the externalSource. Format: projects/{projectId}/locations/{locationId}/connections/{connectionId}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference.property.externalSource">external_source</a></code> | <code>str</code> | External source that backs this dataset. |

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference.property.connection"></a>

```python
connection: str
```

- *Type:* str

The connection id that is used to access the externalSource. Format: projects/{projectId}/locations/{locationId}/connections/{connectionId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#connection GoogleBigqueryDataset#connection}

---

##### `external_source`<sup>Required</sup> <a name="external_source" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference.property.externalSource"></a>

```python
external_source: str
```

- *Type:* str

External source that backs this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#external_source GoogleBigqueryDataset#external_source}

---

### GoogleBigqueryDatasetTimeouts <a name="GoogleBigqueryDatasetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#create GoogleBigqueryDataset#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#delete GoogleBigqueryDataset#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#update GoogleBigqueryDataset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#create GoogleBigqueryDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#delete GoogleBigqueryDataset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#update GoogleBigqueryDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatasetAccessConditionOutputReference <a name="GoogleBigqueryDatasetAccessConditionOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition">GoogleBigqueryDatasetAccessCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition">GoogleBigqueryDatasetAccessCondition</a>

---


### GoogleBigqueryDatasetAccessDatasetDatasetOutputReference <a name="GoogleBigqueryDatasetAccessDatasetDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessDatasetDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a>

---


### GoogleBigqueryDatasetAccessDatasetOutputReference <a name="GoogleBigqueryDatasetAccessDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.putDataset">put_dataset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset` <a name="put_dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.putDataset"></a>

```python
def put_dataset(
  dataset_id: str,
  project_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.putDataset.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.putDataset.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference">GoogleBigqueryDatasetAccessDatasetDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.datasetInput">dataset_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypesInput">target_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypes">target_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.dataset"></a>

```python
dataset: GoogleBigqueryDatasetAccessDatasetDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference">GoogleBigqueryDatasetAccessDatasetDatasetOutputReference</a>

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.datasetInput"></a>

```python
dataset_input: GoogleBigqueryDatasetAccessDatasetDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a>

---

##### `target_types_input`<sup>Optional</sup> <a name="target_types_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypesInput"></a>

```python
target_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_types`<sup>Required</sup> <a name="target_types" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypes"></a>

```python
target_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a>

---


### GoogleBigqueryDatasetAccessList <a name="GoogleBigqueryDatasetAccessList" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryDatasetAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigqueryDatasetAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]]

---


### GoogleBigqueryDatasetAccessOutputReference <a name="GoogleBigqueryDatasetAccessOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putDataset">put_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putRoutine">put_routine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putView">put_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetGroupByEmail">reset_group_by_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetIamMember">reset_iam_member</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetRoutine">reset_routine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetSpecialGroup">reset_special_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetUserByEmail">reset_user_by_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetView">reset_view</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putCondition"></a>

```python
def put_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#expression GoogleBigqueryDataset#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#description GoogleBigqueryDataset#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#location GoogleBigqueryDataset#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#title GoogleBigqueryDataset#title}

---

##### `put_dataset` <a name="put_dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putDataset"></a>

```python
def put_dataset(
  dataset: GoogleBigqueryDatasetAccessDatasetDataset,
  target_types: typing.List[str]
) -> None
```

###### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putDataset.parameter.dataset"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset GoogleBigqueryDataset#dataset}

---

###### `target_types`<sup>Required</sup> <a name="target_types" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putDataset.parameter.targetTypes"></a>

- *Type:* typing.List[str]

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#target_types GoogleBigqueryDataset#target_types}

---

##### `put_routine` <a name="put_routine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putRoutine"></a>

```python
def put_routine(
  dataset_id: str,
  project_id: str,
  routine_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putRoutine.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putRoutine.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---

###### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putRoutine.parameter.routineId"></a>

- *Type:* str

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#routine_id GoogleBigqueryDataset#routine_id}

---

##### `put_view` <a name="put_view" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putView"></a>

```python
def put_view(
  dataset_id: str,
  project_id: str,
  table_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putView.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putView.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putView.parameter.tableId"></a>

- *Type:* str

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_dataset#table_id GoogleBigqueryDataset#table_id}

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_dataset` <a name="reset_dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_group_by_email` <a name="reset_group_by_email" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetGroupByEmail"></a>

```python
def reset_group_by_email() -> None
```

##### `reset_iam_member` <a name="reset_iam_member" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetIamMember"></a>

```python
def reset_iam_member() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_routine` <a name="reset_routine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetRoutine"></a>

```python
def reset_routine() -> None
```

##### `reset_special_group` <a name="reset_special_group" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetSpecialGroup"></a>

```python
def reset_special_group() -> None
```

##### `reset_user_by_email` <a name="reset_user_by_email" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetUserByEmail"></a>

```python
def reset_user_by_email() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetView"></a>

```python
def reset_view() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference">GoogleBigqueryDatasetAccessConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference">GoogleBigqueryDatasetAccessDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference">GoogleBigqueryDatasetAccessRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference">GoogleBigqueryDatasetAccessViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition">GoogleBigqueryDatasetAccessCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.datasetInput">dataset_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.groupByEmailInput">group_by_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.iamMemberInput">iam_member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.routineInput">routine_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.specialGroupInput">special_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.userByEmailInput">user_by_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.viewInput">view_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.groupByEmail">group_by_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.iamMember">iam_member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.specialGroup">special_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.userByEmail">user_by_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.condition"></a>

```python
condition: GoogleBigqueryDatasetAccessConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessConditionOutputReference">GoogleBigqueryDatasetAccessConditionOutputReference</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.dataset"></a>

```python
dataset: GoogleBigqueryDatasetAccessDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference">GoogleBigqueryDatasetAccessDatasetOutputReference</a>

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.routine"></a>

```python
routine: GoogleBigqueryDatasetAccessRoutineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference">GoogleBigqueryDatasetAccessRoutineOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.view"></a>

```python
view: GoogleBigqueryDatasetAccessViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference">GoogleBigqueryDatasetAccessViewOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.conditionInput"></a>

```python
condition_input: GoogleBigqueryDatasetAccessCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessCondition">GoogleBigqueryDatasetAccessCondition</a>

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.datasetInput"></a>

```python
dataset_input: GoogleBigqueryDatasetAccessDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `group_by_email_input`<sup>Optional</sup> <a name="group_by_email_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.groupByEmailInput"></a>

```python
group_by_email_input: str
```

- *Type:* str

---

##### `iam_member_input`<sup>Optional</sup> <a name="iam_member_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.iamMemberInput"></a>

```python
iam_member_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `routine_input`<sup>Optional</sup> <a name="routine_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.routineInput"></a>

```python
routine_input: GoogleBigqueryDatasetAccessRoutine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a>

---

##### `special_group_input`<sup>Optional</sup> <a name="special_group_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.specialGroupInput"></a>

```python
special_group_input: str
```

- *Type:* str

---

##### `user_by_email_input`<sup>Optional</sup> <a name="user_by_email_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.userByEmailInput"></a>

```python
user_by_email_input: str
```

- *Type:* str

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.viewInput"></a>

```python
view_input: GoogleBigqueryDatasetAccessView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `group_by_email`<sup>Required</sup> <a name="group_by_email" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.groupByEmail"></a>

```python
group_by_email: str
```

- *Type:* str

---

##### `iam_member`<sup>Required</sup> <a name="iam_member" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.iamMember"></a>

```python
iam_member: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `special_group`<sup>Required</sup> <a name="special_group" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.specialGroup"></a>

```python
special_group: str
```

- *Type:* str

---

##### `user_by_email`<sup>Required</sup> <a name="user_by_email" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.userByEmail"></a>

```python
user_by_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryDatasetAccess]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess">GoogleBigqueryDatasetAccess</a>]

---


### GoogleBigqueryDatasetAccessRoutineOutputReference <a name="GoogleBigqueryDatasetAccessRoutineOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.routineIdInput">routine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.routineId">routine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `routine_id_input`<sup>Optional</sup> <a name="routine_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.routineIdInput"></a>

```python
routine_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessRoutine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a>

---


### GoogleBigqueryDatasetAccessViewOutputReference <a name="GoogleBigqueryDatasetAccessViewOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a>

---


### GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference <a name="GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetDefaultEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

---


### GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference <a name="GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.resetDefaultStorageLocationUri">reset_default_storage_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_storage_location_uri` <a name="reset_default_storage_location_uri" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.resetDefaultStorageLocationUri"></a>

```python
def reset_default_storage_location_uri() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.defaultStorageLocationUriInput">default_storage_location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.defaultStorageLocationUri">default_storage_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions">GoogleBigqueryDatasetExternalCatalogDatasetOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_storage_location_uri_input`<sup>Optional</sup> <a name="default_storage_location_uri_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.defaultStorageLocationUriInput"></a>

```python
default_storage_location_uri_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_storage_location_uri`<sup>Required</sup> <a name="default_storage_location_uri" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.defaultStorageLocationUri"></a>

```python
default_storage_location_uri: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetExternalCatalogDatasetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalCatalogDatasetOptions">GoogleBigqueryDatasetExternalCatalogDatasetOptions</a>

---


### GoogleBigqueryDatasetExternalDatasetReferenceOutputReference <a name="GoogleBigqueryDatasetExternalDatasetReferenceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.connectionInput">connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.externalSourceInput">external_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.connection">connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.externalSource">external_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference">GoogleBigqueryDatasetExternalDatasetReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_input`<sup>Optional</sup> <a name="connection_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.connectionInput"></a>

```python
connection_input: str
```

- *Type:* str

---

##### `external_source_input`<sup>Optional</sup> <a name="external_source_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.externalSourceInput"></a>

```python
external_source_input: str
```

- *Type:* str

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.connection"></a>

```python
connection: str
```

- *Type:* str

---

##### `external_source`<sup>Required</sup> <a name="external_source" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.externalSource"></a>

```python
external_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetExternalDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetExternalDatasetReference">GoogleBigqueryDatasetExternalDatasetReference</a>

---


### GoogleBigqueryDatasetTimeoutsOutputReference <a name="GoogleBigqueryDatasetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset

googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a>]

---



