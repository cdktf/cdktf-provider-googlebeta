# `googleBigqueryConnection` Submodule <a name="`googleBigqueryConnection` Submodule" id="@cdktf/provider-google-beta.googleBigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryConnection <a name="GoogleBigqueryConnection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws: GoogleBigqueryConnectionAws = None,
  azure: GoogleBigqueryConnectionAzure = None,
  cloud_resource: GoogleBigqueryConnectionCloudResource = None,
  cloud_spanner: GoogleBigqueryConnectionCloudSpanner = None,
  cloud_sql: GoogleBigqueryConnectionCloudSql = None,
  connection_id: str = None,
  description: str = None,
  friendly_name: str = None,
  id: str = None,
  kms_key_name: str = None,
  location: str = None,
  project: str = None,
  spark: GoogleBigqueryConnectionSpark = None,
  timeouts: GoogleBigqueryConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.azure">azure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudResource">cloud_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudSpanner">cloud_spanner</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudSql">cloud_sql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#aws GoogleBigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.azure"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#azure GoogleBigqueryConnection#azure}

---

##### `cloud_resource`<sup>Optional</sup> <a name="cloud_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudResource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#cloud_resource GoogleBigqueryConnection#cloud_resource}

---

##### `cloud_spanner`<sup>Optional</sup> <a name="cloud_spanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudSpanner"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#cloud_spanner GoogleBigqueryConnection#cloud_spanner}

---

##### `cloud_sql`<sup>Optional</sup> <a name="cloud_sql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudSql"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#cloud_sql GoogleBigqueryConnection#cloud_sql}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.connectionId"></a>

- *Type:* str

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#connection_id GoogleBigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.description"></a>

- *Type:* str

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#description GoogleBigqueryConnection#description}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.friendlyName"></a>

- *Type:* str

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#friendly_name GoogleBigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#kms_key_name GoogleBigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#location GoogleBigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#spark GoogleBigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#timeouts GoogleBigqueryConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource">put_cloud_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner">put_cloud_spanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql">put_cloud_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark">put_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudResource">reset_cloud_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSpanner">reset_cloud_spanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSql">reset_cloud_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetSpark">reset_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws` <a name="put_aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws"></a>

```python
def put_aws(
  access_role: GoogleBigqueryConnectionAwsAccessRole
) -> None
```

###### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws.parameter.accessRole"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#access_role GoogleBigqueryConnection#access_role}

---

##### `put_azure` <a name="put_azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure"></a>

```python
def put_azure(
  customer_tenant_id: str,
  federated_application_client_id: str = None
) -> None
```

###### `customer_tenant_id`<sup>Required</sup> <a name="customer_tenant_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure.parameter.customerTenantId"></a>

- *Type:* str

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#customer_tenant_id GoogleBigqueryConnection#customer_tenant_id}

---

###### `federated_application_client_id`<sup>Optional</sup> <a name="federated_application_client_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure.parameter.federatedApplicationClientId"></a>

- *Type:* str

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#federated_application_client_id GoogleBigqueryConnection#federated_application_client_id}

---

##### `put_cloud_resource` <a name="put_cloud_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource"></a>

```python
def put_cloud_resource() -> None
```

##### `put_cloud_spanner` <a name="put_cloud_spanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner"></a>

```python
def put_cloud_spanner(
  database: str,
  database_role: str = None,
  max_parallelism: typing.Union[int, float] = None,
  use_data_boost: typing.Union[bool, IResolvable] = None,
  use_parallelism: typing.Union[bool, IResolvable] = None,
  use_serverless_analytics: typing.Union[bool, IResolvable] = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.database"></a>

- *Type:* str

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

###### `database_role`<sup>Optional</sup> <a name="database_role" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.databaseRole"></a>

- *Type:* str

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#database_role GoogleBigqueryConnection#database_role}

---

###### `max_parallelism`<sup>Optional</sup> <a name="max_parallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.maxParallelism"></a>

- *Type:* typing.Union[int, float]

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#max_parallelism GoogleBigqueryConnection#max_parallelism}

---

###### `use_data_boost`<sup>Optional</sup> <a name="use_data_boost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.useDataBoost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#use_data_boost GoogleBigqueryConnection#use_data_boost}

---

###### `use_parallelism`<sup>Optional</sup> <a name="use_parallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.useParallelism"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#use_parallelism GoogleBigqueryConnection#use_parallelism}

---

###### `use_serverless_analytics`<sup>Optional</sup> <a name="use_serverless_analytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.useServerlessAnalytics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#use_serverless_analytics GoogleBigqueryConnection#use_serverless_analytics}

---

##### `put_cloud_sql` <a name="put_cloud_sql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql"></a>

```python
def put_cloud_sql(
  credential: GoogleBigqueryConnectionCloudSqlCredential,
  database: str,
  instance_id: str,
  type: str
) -> None
```

###### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql.parameter.credential"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#credential GoogleBigqueryConnection#credential}

---

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql.parameter.database"></a>

- *Type:* str

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

###### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql.parameter.instanceId"></a>

- *Type:* str

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#instance_id GoogleBigqueryConnection#instance_id}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql.parameter.type"></a>

- *Type:* str

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#type GoogleBigqueryConnection#type}

---

##### `put_spark` <a name="put_spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark"></a>

```python
def put_spark(
  metastore_service_config: GoogleBigqueryConnectionSparkMetastoreServiceConfig = None,
  spark_history_server_config: GoogleBigqueryConnectionSparkSparkHistoryServerConfig = None
) -> None
```

###### `metastore_service_config`<sup>Optional</sup> <a name="metastore_service_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark.parameter.metastoreServiceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#metastore_service_config GoogleBigqueryConnection#metastore_service_config}

---

###### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark.parameter.sparkHistoryServerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#spark_history_server_config GoogleBigqueryConnection#spark_history_server_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}.

---

##### `reset_aws` <a name="reset_aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_cloud_resource` <a name="reset_cloud_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudResource"></a>

```python
def reset_cloud_resource() -> None
```

##### `reset_cloud_spanner` <a name="reset_cloud_spanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSpanner"></a>

```python
def reset_cloud_spanner() -> None
```

##### `reset_cloud_sql` <a name="reset_cloud_sql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSql"></a>

```python
def reset_cloud_sql() -> None
```

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spark` <a name="reset_spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetSpark"></a>

```python
def reset_spark() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference">GoogleBigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference">GoogleBigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResource">cloud_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference">GoogleBigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpanner">cloud_spanner</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference">GoogleBigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSql">cloud_sql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference">GoogleBigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.hasCredential">has_credential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference">GoogleBigqueryConnectionSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference">GoogleBigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.awsInput">aws_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azureInput">azure_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResourceInput">cloud_resource_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpannerInput">cloud_spanner_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSqlInput">cloud_sql_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.sparkInput">spark_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.aws"></a>

```python
aws: GoogleBigqueryConnectionAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference">GoogleBigqueryConnectionAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azure"></a>

```python
azure: GoogleBigqueryConnectionAzureOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference">GoogleBigqueryConnectionAzureOutputReference</a>

---

##### `cloud_resource`<sup>Required</sup> <a name="cloud_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResource"></a>

```python
cloud_resource: GoogleBigqueryConnectionCloudResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference">GoogleBigqueryConnectionCloudResourceOutputReference</a>

---

##### `cloud_spanner`<sup>Required</sup> <a name="cloud_spanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpanner"></a>

```python
cloud_spanner: GoogleBigqueryConnectionCloudSpannerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference">GoogleBigqueryConnectionCloudSpannerOutputReference</a>

---

##### `cloud_sql`<sup>Required</sup> <a name="cloud_sql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSql"></a>

```python
cloud_sql: GoogleBigqueryConnectionCloudSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference">GoogleBigqueryConnectionCloudSqlOutputReference</a>

---

##### `has_credential`<sup>Required</sup> <a name="has_credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.hasCredential"></a>

```python
has_credential: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.spark"></a>

```python
spark: GoogleBigqueryConnectionSparkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference">GoogleBigqueryConnectionSparkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeouts"></a>

```python
timeouts: GoogleBigqueryConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference">GoogleBigqueryConnectionTimeoutsOutputReference</a>

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.awsInput"></a>

```python
aws_input: GoogleBigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azureInput"></a>

```python
azure_input: GoogleBigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---

##### `cloud_resource_input`<sup>Optional</sup> <a name="cloud_resource_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResourceInput"></a>

```python
cloud_resource_input: GoogleBigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---

##### `cloud_spanner_input`<sup>Optional</sup> <a name="cloud_spanner_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpannerInput"></a>

```python
cloud_spanner_input: GoogleBigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---

##### `cloud_sql_input`<sup>Optional</sup> <a name="cloud_sql_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSqlInput"></a>

```python
cloud_sql_input: GoogleBigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `spark_input`<sup>Optional</sup> <a name="spark_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.sparkInput"></a>

```python
spark_input: GoogleBigqueryConnectionSpark
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigqueryConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryConnectionAws <a name="GoogleBigqueryConnectionAws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionAws(
  access_role: GoogleBigqueryConnectionAwsAccessRole
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.property.accessRole">access_role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.property.accessRole"></a>

```python
access_role: GoogleBigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#access_role GoogleBigqueryConnection#access_role}

---

### GoogleBigqueryConnectionAwsAccessRole <a name="GoogleBigqueryConnectionAwsAccessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole(
  iam_role_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.property.iamRoleId">iam_role_id</a></code> | <code>str</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```python
iam_role_id: str
```

- *Type:* str

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#iam_role_id GoogleBigqueryConnection#iam_role_id}

---

### GoogleBigqueryConnectionAzure <a name="GoogleBigqueryConnectionAzure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionAzure(
  customer_tenant_id: str,
  federated_application_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.customerTenantId">customer_tenant_id</a></code> | <code>str</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.federatedApplicationClientId">federated_application_client_id</a></code> | <code>str</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `customer_tenant_id`<sup>Required</sup> <a name="customer_tenant_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.customerTenantId"></a>

```python
customer_tenant_id: str
```

- *Type:* str

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#customer_tenant_id GoogleBigqueryConnection#customer_tenant_id}

---

##### `federated_application_client_id`<sup>Optional</sup> <a name="federated_application_client_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```python
federated_application_client_id: str
```

- *Type:* str

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#federated_application_client_id GoogleBigqueryConnection#federated_application_client_id}

---

### GoogleBigqueryConnectionCloudResource <a name="GoogleBigqueryConnectionCloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionCloudResource()
```


### GoogleBigqueryConnectionCloudSpanner <a name="GoogleBigqueryConnectionCloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner(
  database: str,
  database_role: str = None,
  max_parallelism: typing.Union[int, float] = None,
  use_data_boost: typing.Union[bool, IResolvable] = None,
  use_parallelism: typing.Union[bool, IResolvable] = None,
  use_serverless_analytics: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.database">database</a></code> | <code>str</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.databaseRole">database_role</a></code> | <code>str</code> | Cloud Spanner database role for fine-grained access control. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.maxParallelism">max_parallelism</a></code> | <code>typing.Union[int, float]</code> | Allows setting max parallelism per query when executing on Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useDataBoost">use_data_boost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the request will be executed via Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useParallelism">use_parallelism</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useServerlessAnalytics">use_serverless_analytics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.database"></a>

```python
database: str
```

- *Type:* str

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `database_role`<sup>Optional</sup> <a name="database_role" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.databaseRole"></a>

```python
database_role: str
```

- *Type:* str

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#database_role GoogleBigqueryConnection#database_role}

---

##### `max_parallelism`<sup>Optional</sup> <a name="max_parallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.maxParallelism"></a>

```python
max_parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#max_parallelism GoogleBigqueryConnection#max_parallelism}

---

##### `use_data_boost`<sup>Optional</sup> <a name="use_data_boost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useDataBoost"></a>

```python
use_data_boost: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#use_data_boost GoogleBigqueryConnection#use_data_boost}

---

##### `use_parallelism`<sup>Optional</sup> <a name="use_parallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useParallelism"></a>

```python
use_parallelism: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#use_parallelism GoogleBigqueryConnection#use_parallelism}

---

##### `use_serverless_analytics`<sup>Optional</sup> <a name="use_serverless_analytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```python
use_serverless_analytics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#use_serverless_analytics GoogleBigqueryConnection#use_serverless_analytics}

---

### GoogleBigqueryConnectionCloudSql <a name="GoogleBigqueryConnectionCloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionCloudSql(
  credential: GoogleBigqueryConnectionCloudSqlCredential,
  database: str,
  instance_id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.database">database</a></code> | <code>str</code> | Database name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.instanceId">instance_id</a></code> | <code>str</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.type">type</a></code> | <code>str</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.credential"></a>

```python
credential: GoogleBigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#credential GoogleBigqueryConnection#credential}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.database"></a>

```python
database: str
```

- *Type:* str

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#instance_id GoogleBigqueryConnection#instance_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#type GoogleBigqueryConnection#type}

---

### GoogleBigqueryConnectionCloudSqlCredential <a name="GoogleBigqueryConnectionCloudSqlCredential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.password">password</a></code> | <code>str</code> | Password for database. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.username">username</a></code> | <code>str</code> | Username for database. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.password"></a>

```python
password: str
```

- *Type:* str

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#password GoogleBigqueryConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.username"></a>

```python
username: str
```

- *Type:* str

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#username GoogleBigqueryConnection#username}

---

### GoogleBigqueryConnectionConfig <a name="GoogleBigqueryConnectionConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws: GoogleBigqueryConnectionAws = None,
  azure: GoogleBigqueryConnectionAzure = None,
  cloud_resource: GoogleBigqueryConnectionCloudResource = None,
  cloud_spanner: GoogleBigqueryConnectionCloudSpanner = None,
  cloud_sql: GoogleBigqueryConnectionCloudSql = None,
  connection_id: str = None,
  description: str = None,
  friendly_name: str = None,
  id: str = None,
  kms_key_name: str = None,
  location: str = None,
  project: str = None,
  spark: GoogleBigqueryConnectionSpark = None,
  timeouts: GoogleBigqueryConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudResource">cloud_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSpanner">cloud_spanner</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSql">cloud_sql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.description">description</a></code> | <code>str</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.aws"></a>

```python
aws: GoogleBigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#aws GoogleBigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.azure"></a>

```python
azure: GoogleBigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#azure GoogleBigqueryConnection#azure}

---

##### `cloud_resource`<sup>Optional</sup> <a name="cloud_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudResource"></a>

```python
cloud_resource: GoogleBigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#cloud_resource GoogleBigqueryConnection#cloud_resource}

---

##### `cloud_spanner`<sup>Optional</sup> <a name="cloud_spanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSpanner"></a>

```python
cloud_spanner: GoogleBigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#cloud_spanner GoogleBigqueryConnection#cloud_spanner}

---

##### `cloud_sql`<sup>Optional</sup> <a name="cloud_sql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSql"></a>

```python
cloud_sql: GoogleBigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#cloud_sql GoogleBigqueryConnection#cloud_sql}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#connection_id GoogleBigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#description GoogleBigqueryConnection#description}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#friendly_name GoogleBigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#kms_key_name GoogleBigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#location GoogleBigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.spark"></a>

```python
spark: GoogleBigqueryConnectionSpark
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#spark GoogleBigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#timeouts GoogleBigqueryConnection#timeouts}

---

### GoogleBigqueryConnectionSpark <a name="GoogleBigqueryConnectionSpark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionSpark(
  metastore_service_config: GoogleBigqueryConnectionSparkMetastoreServiceConfig = None,
  spark_history_server_config: GoogleBigqueryConnectionSparkSparkHistoryServerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.metastoreServiceConfig">metastore_service_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | metastore_service_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastore_service_config`<sup>Optional</sup> <a name="metastore_service_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.metastoreServiceConfig"></a>

```python
metastore_service_config: GoogleBigqueryConnectionSparkMetastoreServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#metastore_service_config GoogleBigqueryConnection#metastore_service_config}

---

##### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: GoogleBigqueryConnectionSparkSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#spark_history_server_config GoogleBigqueryConnection#spark_history_server_config}

---

### GoogleBigqueryConnectionSparkMetastoreServiceConfig <a name="GoogleBigqueryConnectionSparkMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig(
  metastore_service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService">metastore_service</a></code> | <code>str</code> | Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId]. |

---

##### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#metastore_service GoogleBigqueryConnection#metastore_service}

---

### GoogleBigqueryConnectionSparkSparkHistoryServerConfig <a name="GoogleBigqueryConnectionSparkSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig(
  dataproc_cluster: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name]. |

---

##### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#dataproc_cluster GoogleBigqueryConnection#dataproc_cluster}

---

### GoogleBigqueryConnectionTimeouts <a name="GoogleBigqueryConnectionTimeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryConnectionAwsAccessRoleOutputReference <a name="GoogleBigqueryConnectionAwsAccessRoleOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">iam_role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">iam_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `iam_role_id_input`<sup>Optional</sup> <a name="iam_role_id_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```python
iam_role_id_input: str
```

- *Type:* str

---

##### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```python
iam_role_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---


### GoogleBigqueryConnectionAwsOutputReference <a name="GoogleBigqueryConnectionAwsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole">put_access_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_role` <a name="put_access_role" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole"></a>

```python
def put_access_role(
  iam_role_id: str
) -> None
```

###### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole.parameter.iamRoleId"></a>

- *Type:* str

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#iam_role_id GoogleBigqueryConnection#iam_role_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRole">access_role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference">GoogleBigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRoleInput">access_role_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRole"></a>

```python
access_role: GoogleBigqueryConnectionAwsAccessRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference">GoogleBigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `access_role_input`<sup>Optional</sup> <a name="access_role_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```python
access_role_input: GoogleBigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---


### GoogleBigqueryConnectionAzureOutputReference <a name="GoogleBigqueryConnectionAzureOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId">reset_federated_application_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_federated_application_client_id` <a name="reset_federated_application_client_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```python
def reset_federated_application_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantIdInput">customer_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">federated_application_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantId">customer_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">federated_application_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `customer_tenant_id_input`<sup>Optional</sup> <a name="customer_tenant_id_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```python
customer_tenant_id_input: str
```

- *Type:* str

---

##### `federated_application_client_id_input`<sup>Optional</sup> <a name="federated_application_client_id_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```python
federated_application_client_id_input: str
```

- *Type:* str

---

##### `customer_tenant_id`<sup>Required</sup> <a name="customer_tenant_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```python
customer_tenant_id: str
```

- *Type:* str

---

##### `federated_application_client_id`<sup>Required</sup> <a name="federated_application_client_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```python
federated_application_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---


### GoogleBigqueryConnectionCloudResourceOutputReference <a name="GoogleBigqueryConnectionCloudResourceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---


### GoogleBigqueryConnectionCloudSpannerOutputReference <a name="GoogleBigqueryConnectionCloudSpannerOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole">reset_database_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism">reset_max_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost">reset_use_data_boost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseParallelism">reset_use_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics">reset_use_serverless_analytics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_role` <a name="reset_database_role" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole"></a>

```python
def reset_database_role() -> None
```

##### `reset_max_parallelism` <a name="reset_max_parallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism"></a>

```python
def reset_max_parallelism() -> None
```

##### `reset_use_data_boost` <a name="reset_use_data_boost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost"></a>

```python
def reset_use_data_boost() -> None
```

##### `reset_use_parallelism` <a name="reset_use_parallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```python
def reset_use_parallelism() -> None
```

##### `reset_use_serverless_analytics` <a name="reset_use_serverless_analytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```python
def reset_use_serverless_analytics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput">database_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput">max_parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput">use_data_boost_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">use_parallelism_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">use_serverless_analytics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRole">database_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelism">max_parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoost">use_data_boost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelism">use_parallelism</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">use_serverless_analytics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `database_role_input`<sup>Optional</sup> <a name="database_role_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput"></a>

```python
database_role_input: str
```

- *Type:* str

---

##### `max_parallelism_input`<sup>Optional</sup> <a name="max_parallelism_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput"></a>

```python
max_parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_data_boost_input`<sup>Optional</sup> <a name="use_data_boost_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput"></a>

```python
use_data_boost_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_parallelism_input`<sup>Optional</sup> <a name="use_parallelism_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```python
use_parallelism_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_serverless_analytics_input`<sup>Optional</sup> <a name="use_serverless_analytics_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```python
use_serverless_analytics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `database_role`<sup>Required</sup> <a name="database_role" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRole"></a>

```python
database_role: str
```

- *Type:* str

---

##### `max_parallelism`<sup>Required</sup> <a name="max_parallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelism"></a>

```python
max_parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_data_boost`<sup>Required</sup> <a name="use_data_boost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoost"></a>

```python
use_data_boost: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_parallelism`<sup>Required</sup> <a name="use_parallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```python
use_parallelism: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_serverless_analytics`<sup>Required</sup> <a name="use_serverless_analytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```python
use_serverless_analytics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---


### GoogleBigqueryConnectionCloudSqlCredentialOutputReference <a name="GoogleBigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---


### GoogleBigqueryConnectionCloudSqlOutputReference <a name="GoogleBigqueryConnectionCloudSqlOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential">put_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_credential` <a name="put_credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```python
def put_credential(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential.parameter.password"></a>

- *Type:* str

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#password GoogleBigqueryConnection#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential.parameter.username"></a>

- *Type:* str

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#username GoogleBigqueryConnection#username}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference">GoogleBigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credentialInput">credential_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```python
credential: GoogleBigqueryConnectionCloudSqlCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference">GoogleBigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `credential_input`<sup>Optional</sup> <a name="credential_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```python
credential_input: GoogleBigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---


### GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference <a name="GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService">reset_metastore_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metastore_service` <a name="reset_metastore_service" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService"></a>

```python
def reset_metastore_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput">metastore_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService">metastore_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metastore_service_input`<sup>Optional</sup> <a name="metastore_service_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput"></a>

```python
metastore_service_input: str
```

- *Type:* str

---

##### `metastore_service`<sup>Required</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionSparkMetastoreServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---


### GoogleBigqueryConnectionSparkOutputReference <a name="GoogleBigqueryConnectionSparkOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig">put_metastore_service_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig">put_spark_history_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig">reset_metastore_service_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig">reset_spark_history_server_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metastore_service_config` <a name="put_metastore_service_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig"></a>

```python
def put_metastore_service_config(
  metastore_service: str = None
) -> None
```

###### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig.parameter.metastoreService"></a>

- *Type:* str

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#metastore_service GoogleBigqueryConnection#metastore_service}

---

##### `put_spark_history_server_config` <a name="put_spark_history_server_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig"></a>

```python
def put_spark_history_server_config(
  dataproc_cluster: str = None
) -> None
```

###### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig.parameter.dataprocCluster"></a>

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_connection#dataproc_cluster GoogleBigqueryConnection#dataproc_cluster}

---

##### `reset_metastore_service_config` <a name="reset_metastore_service_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig"></a>

```python
def reset_metastore_service_config() -> None
```

##### `reset_spark_history_server_config` <a name="reset_spark_history_server_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig"></a>

```python
def reset_spark_history_server_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfig">metastore_service_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference">GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference">GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput">metastore_service_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput">spark_history_server_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metastore_service_config`<sup>Required</sup> <a name="metastore_service_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfig"></a>

```python
metastore_service_config: GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference">GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference</a>

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `spark_history_server_config`<sup>Required</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference">GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a>

---

##### `metastore_service_config_input`<sup>Optional</sup> <a name="metastore_service_config_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput"></a>

```python
metastore_service_config_input: GoogleBigqueryConnectionSparkMetastoreServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `spark_history_server_config_input`<sup>Optional</sup> <a name="spark_history_server_config_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput"></a>

```python
spark_history_server_config_input: GoogleBigqueryConnectionSparkSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionSpark
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---


### GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference <a name="GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster">reset_dataproc_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataproc_cluster` <a name="reset_dataproc_cluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```python
def reset_dataproc_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataproc_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataproc_cluster_input`<sup>Optional</sup> <a name="dataproc_cluster_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```python
dataproc_cluster_input: str
```

- *Type:* str

---

##### `dataproc_cluster`<sup>Required</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryConnectionSparkSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---


### GoogleBigqueryConnectionTimeoutsOutputReference <a name="GoogleBigqueryConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_connection

googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>]

---



