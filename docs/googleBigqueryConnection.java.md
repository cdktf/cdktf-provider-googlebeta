# `googleBigqueryConnection` Submodule <a name="`googleBigqueryConnection` Submodule" id="@cdktf/provider-google-beta.googleBigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryConnection <a name="GoogleBigqueryConnection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnection;

GoogleBigqueryConnection.Builder.create(Construct scope, java.lang.String id)
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
//  .aws(GoogleBigqueryConnectionAws)
//  .azure(GoogleBigqueryConnectionAzure)
//  .cloudResource(GoogleBigqueryConnectionCloudResource)
//  .cloudSpanner(GoogleBigqueryConnectionCloudSpanner)
//  .cloudSql(GoogleBigqueryConnectionCloudSql)
//  .connectionId(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .spark(GoogleBigqueryConnectionSpark)
//  .timeouts(GoogleBigqueryConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.azure">azure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#aws GoogleBigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.azure"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#azure GoogleBigqueryConnection#azure}

---

##### `cloudResource`<sup>Optional</sup> <a name="cloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudResource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#cloud_resource GoogleBigqueryConnection#cloud_resource}

---

##### `cloudSpanner`<sup>Optional</sup> <a name="cloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudSpanner"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#cloud_spanner GoogleBigqueryConnection#cloud_spanner}

---

##### `cloudSql`<sup>Optional</sup> <a name="cloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.cloudSql"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#cloud_sql GoogleBigqueryConnection#cloud_sql}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#connection_id GoogleBigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#description GoogleBigqueryConnection#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.friendlyName"></a>

- *Type:* java.lang.String

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#friendly_name GoogleBigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#kms_key_name GoogleBigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#location GoogleBigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#spark GoogleBigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#timeouts GoogleBigqueryConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource">putCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner">putCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql">putCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudResource">resetCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSpanner">resetCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSql">resetCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws"></a>

```java
public void putAws(GoogleBigqueryConnectionAws value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure"></a>

```java
public void putAzure(GoogleBigqueryConnectionAzure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---

##### `putCloudResource` <a name="putCloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource"></a>

```java
public void putCloudResource(GoogleBigqueryConnectionCloudResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---

##### `putCloudSpanner` <a name="putCloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner"></a>

```java
public void putCloudSpanner(GoogleBigqueryConnectionCloudSpanner value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---

##### `putCloudSql` <a name="putCloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql"></a>

```java
public void putCloudSql(GoogleBigqueryConnectionCloudSql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark"></a>

```java
public void putSpark(GoogleBigqueryConnectionSpark value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigqueryConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAws"></a>

```java
public void resetAws()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCloudResource` <a name="resetCloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudResource"></a>

```java
public void resetCloudResource()
```

##### `resetCloudSpanner` <a name="resetCloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSpanner"></a>

```java
public void resetCloudSpanner()
```

##### `resetCloudSql` <a name="resetCloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSql"></a>

```java
public void resetCloudSql()
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetProject"></a>

```java
public void resetProject()
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetSpark"></a>

```java
public void resetSpark()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnection;

GoogleBigqueryConnection.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnection;

GoogleBigqueryConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnection;

GoogleBigqueryConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnection;

GoogleBigqueryConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigqueryConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBigqueryConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigqueryConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigqueryConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference">GoogleBigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference">GoogleBigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference">GoogleBigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference">GoogleBigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference">GoogleBigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.hasCredential">hasCredential</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference">GoogleBigqueryConnectionSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference">GoogleBigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azureInput">azureInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResourceInput">cloudResourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpannerInput">cloudSpannerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSqlInput">cloudSqlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.aws"></a>

```java
public GoogleBigqueryConnectionAwsOutputReference getAws();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference">GoogleBigqueryConnectionAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azure"></a>

```java
public GoogleBigqueryConnectionAzureOutputReference getAzure();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference">GoogleBigqueryConnectionAzureOutputReference</a>

---

##### `cloudResource`<sup>Required</sup> <a name="cloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResource"></a>

```java
public GoogleBigqueryConnectionCloudResourceOutputReference getCloudResource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference">GoogleBigqueryConnectionCloudResourceOutputReference</a>

---

##### `cloudSpanner`<sup>Required</sup> <a name="cloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpanner"></a>

```java
public GoogleBigqueryConnectionCloudSpannerOutputReference getCloudSpanner();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference">GoogleBigqueryConnectionCloudSpannerOutputReference</a>

---

##### `cloudSql`<sup>Required</sup> <a name="cloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSql"></a>

```java
public GoogleBigqueryConnectionCloudSqlOutputReference getCloudSql();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference">GoogleBigqueryConnectionCloudSqlOutputReference</a>

---

##### `hasCredential`<sup>Required</sup> <a name="hasCredential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.hasCredential"></a>

```java
public IResolvable getHasCredential();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.spark"></a>

```java
public GoogleBigqueryConnectionSparkOutputReference getSpark();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference">GoogleBigqueryConnectionSparkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeouts"></a>

```java
public GoogleBigqueryConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference">GoogleBigqueryConnectionTimeoutsOutputReference</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.awsInput"></a>

```java
public GoogleBigqueryConnectionAws getAwsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azureInput"></a>

```java
public GoogleBigqueryConnectionAzure getAzureInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---

##### `cloudResourceInput`<sup>Optional</sup> <a name="cloudResourceInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResourceInput"></a>

```java
public GoogleBigqueryConnectionCloudResource getCloudResourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---

##### `cloudSpannerInput`<sup>Optional</sup> <a name="cloudSpannerInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpannerInput"></a>

```java
public GoogleBigqueryConnectionCloudSpanner getCloudSpannerInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---

##### `cloudSqlInput`<sup>Optional</sup> <a name="cloudSqlInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSqlInput"></a>

```java
public GoogleBigqueryConnectionCloudSql getCloudSqlInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.sparkInput"></a>

```java
public GoogleBigqueryConnectionSpark getSparkInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryConnectionAws <a name="GoogleBigqueryConnectionAws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionAws;

GoogleBigqueryConnectionAws.builder()
    .accessRole(GoogleBigqueryConnectionAwsAccessRole)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.property.accessRole">accessRole</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.property.accessRole"></a>

```java
public GoogleBigqueryConnectionAwsAccessRole getAccessRole();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#access_role GoogleBigqueryConnection#access_role}

---

### GoogleBigqueryConnectionAwsAccessRole <a name="GoogleBigqueryConnectionAwsAccessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionAwsAccessRole;

GoogleBigqueryConnectionAwsAccessRole.builder()
    .iamRoleId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.property.iamRoleId">iamRoleId</a></code> | <code>java.lang.String</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```java
public java.lang.String getIamRoleId();
```

- *Type:* java.lang.String

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#iam_role_id GoogleBigqueryConnection#iam_role_id}

---

### GoogleBigqueryConnectionAzure <a name="GoogleBigqueryConnectionAzure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionAzure;

GoogleBigqueryConnectionAzure.builder()
    .customerTenantId(java.lang.String)
//  .federatedApplicationClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.customerTenantId">customerTenantId</a></code> | <code>java.lang.String</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>java.lang.String</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.customerTenantId"></a>

```java
public java.lang.String getCustomerTenantId();
```

- *Type:* java.lang.String

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#customer_tenant_id GoogleBigqueryConnection#customer_tenant_id}

---

##### `federatedApplicationClientId`<sup>Optional</sup> <a name="federatedApplicationClientId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```java
public java.lang.String getFederatedApplicationClientId();
```

- *Type:* java.lang.String

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#federated_application_client_id GoogleBigqueryConnection#federated_application_client_id}

---

### GoogleBigqueryConnectionCloudResource <a name="GoogleBigqueryConnectionCloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionCloudResource;

GoogleBigqueryConnectionCloudResource.builder()
    .build();
```


### GoogleBigqueryConnectionCloudSpanner <a name="GoogleBigqueryConnectionCloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionCloudSpanner;

GoogleBigqueryConnectionCloudSpanner.builder()
    .database(java.lang.String)
//  .databaseRole(java.lang.String)
//  .maxParallelism(java.lang.Number)
//  .useDataBoost(java.lang.Boolean)
//  .useDataBoost(IResolvable)
//  .useParallelism(java.lang.Boolean)
//  .useParallelism(IResolvable)
//  .useServerlessAnalytics(java.lang.Boolean)
//  .useServerlessAnalytics(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.database">database</a></code> | <code>java.lang.String</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.databaseRole">databaseRole</a></code> | <code>java.lang.String</code> | Cloud Spanner database role for fine-grained access control. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.maxParallelism">maxParallelism</a></code> | <code>java.lang.Number</code> | Allows setting max parallelism per query when executing on Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useDataBoost">useDataBoost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the request will be executed via Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useParallelism">useParallelism</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.databaseRole"></a>

```java
public java.lang.String getDatabaseRole();
```

- *Type:* java.lang.String

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#database_role GoogleBigqueryConnection#database_role}

---

##### `maxParallelism`<sup>Optional</sup> <a name="maxParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.maxParallelism"></a>

```java
public java.lang.Number getMaxParallelism();
```

- *Type:* java.lang.Number

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#max_parallelism GoogleBigqueryConnection#max_parallelism}

---

##### `useDataBoost`<sup>Optional</sup> <a name="useDataBoost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useDataBoost"></a>

```java
public java.lang.Object getUseDataBoost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#use_data_boost GoogleBigqueryConnection#use_data_boost}

---

##### `useParallelism`<sup>Optional</sup> <a name="useParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useParallelism"></a>

```java
public java.lang.Object getUseParallelism();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#use_parallelism GoogleBigqueryConnection#use_parallelism}

---

##### `useServerlessAnalytics`<sup>Optional</sup> <a name="useServerlessAnalytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```java
public java.lang.Object getUseServerlessAnalytics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#use_serverless_analytics GoogleBigqueryConnection#use_serverless_analytics}

---

### GoogleBigqueryConnectionCloudSql <a name="GoogleBigqueryConnectionCloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionCloudSql;

GoogleBigqueryConnectionCloudSql.builder()
    .credential(GoogleBigqueryConnectionCloudSqlCredential)
    .database(java.lang.String)
    .instanceId(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.database">database</a></code> | <code>java.lang.String</code> | Database name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.type">type</a></code> | <code>java.lang.String</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.credential"></a>

```java
public GoogleBigqueryConnectionCloudSqlCredential getCredential();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#credential GoogleBigqueryConnection#credential}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#instance_id GoogleBigqueryConnection#instance_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#type GoogleBigqueryConnection#type}

---

### GoogleBigqueryConnectionCloudSqlCredential <a name="GoogleBigqueryConnectionCloudSqlCredential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionCloudSqlCredential;

GoogleBigqueryConnectionCloudSqlCredential.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.password">password</a></code> | <code>java.lang.String</code> | Password for database. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.username">username</a></code> | <code>java.lang.String</code> | Username for database. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#password GoogleBigqueryConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#username GoogleBigqueryConnection#username}

---

### GoogleBigqueryConnectionConfig <a name="GoogleBigqueryConnectionConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionConfig;

GoogleBigqueryConnectionConfig.builder()
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
//  .aws(GoogleBigqueryConnectionAws)
//  .azure(GoogleBigqueryConnectionAzure)
//  .cloudResource(GoogleBigqueryConnectionCloudResource)
//  .cloudSpanner(GoogleBigqueryConnectionCloudSpanner)
//  .cloudSql(GoogleBigqueryConnectionCloudSql)
//  .connectionId(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .spark(GoogleBigqueryConnectionSpark)
//  .timeouts(GoogleBigqueryConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.aws"></a>

```java
public GoogleBigqueryConnectionAws getAws();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#aws GoogleBigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.azure"></a>

```java
public GoogleBigqueryConnectionAzure getAzure();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#azure GoogleBigqueryConnection#azure}

---

##### `cloudResource`<sup>Optional</sup> <a name="cloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudResource"></a>

```java
public GoogleBigqueryConnectionCloudResource getCloudResource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#cloud_resource GoogleBigqueryConnection#cloud_resource}

---

##### `cloudSpanner`<sup>Optional</sup> <a name="cloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSpanner"></a>

```java
public GoogleBigqueryConnectionCloudSpanner getCloudSpanner();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#cloud_spanner GoogleBigqueryConnection#cloud_spanner}

---

##### `cloudSql`<sup>Optional</sup> <a name="cloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSql"></a>

```java
public GoogleBigqueryConnectionCloudSql getCloudSql();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#cloud_sql GoogleBigqueryConnection#cloud_sql}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#connection_id GoogleBigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#description GoogleBigqueryConnection#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#friendly_name GoogleBigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#kms_key_name GoogleBigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#location GoogleBigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.spark"></a>

```java
public GoogleBigqueryConnectionSpark getSpark();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#spark GoogleBigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.timeouts"></a>

```java
public GoogleBigqueryConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#timeouts GoogleBigqueryConnection#timeouts}

---

### GoogleBigqueryConnectionSpark <a name="GoogleBigqueryConnectionSpark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionSpark;

GoogleBigqueryConnectionSpark.builder()
//  .metastoreServiceConfig(GoogleBigqueryConnectionSparkMetastoreServiceConfig)
//  .sparkHistoryServerConfig(GoogleBigqueryConnectionSparkSparkHistoryServerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | metastore_service_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreServiceConfig`<sup>Optional</sup> <a name="metastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.metastoreServiceConfig"></a>

```java
public GoogleBigqueryConnectionSparkMetastoreServiceConfig getMetastoreServiceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#metastore_service_config GoogleBigqueryConnection#metastore_service_config}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.sparkHistoryServerConfig"></a>

```java
public GoogleBigqueryConnectionSparkSparkHistoryServerConfig getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#spark_history_server_config GoogleBigqueryConnection#spark_history_server_config}

---

### GoogleBigqueryConnectionSparkMetastoreServiceConfig <a name="GoogleBigqueryConnectionSparkMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionSparkMetastoreServiceConfig;

GoogleBigqueryConnectionSparkMetastoreServiceConfig.builder()
//  .metastoreService(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId]. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#metastore_service GoogleBigqueryConnection#metastore_service}

---

### GoogleBigqueryConnectionSparkSparkHistoryServerConfig <a name="GoogleBigqueryConnectionSparkSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig;

GoogleBigqueryConnectionSparkSparkHistoryServerConfig.builder()
//  .dataprocCluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name]. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#dataproc_cluster GoogleBigqueryConnection#dataproc_cluster}

---

### GoogleBigqueryConnectionTimeouts <a name="GoogleBigqueryConnectionTimeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionTimeouts;

GoogleBigqueryConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryConnectionAwsAccessRoleOutputReference <a name="GoogleBigqueryConnectionAwsAccessRoleOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionAwsAccessRoleOutputReference;

new GoogleBigqueryConnectionAwsAccessRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">iamRoleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">iamRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `iamRoleIdInput`<sup>Optional</sup> <a name="iamRoleIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```java
public java.lang.String getIamRoleIdInput();
```

- *Type:* java.lang.String

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```java
public java.lang.String getIamRoleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionAwsAccessRole getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---


### GoogleBigqueryConnectionAwsOutputReference <a name="GoogleBigqueryConnectionAwsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionAwsOutputReference;

new GoogleBigqueryConnectionAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole">putAccessRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessRole` <a name="putAccessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole"></a>

```java
public void putAccessRole(GoogleBigqueryConnectionAwsAccessRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRole">accessRole</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference">GoogleBigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRoleInput">accessRoleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRole"></a>

```java
public GoogleBigqueryConnectionAwsAccessRoleOutputReference getAccessRole();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference">GoogleBigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```java
public GoogleBigqueryConnectionAwsAccessRole getAccessRoleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionAws getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---


### GoogleBigqueryConnectionAzureOutputReference <a name="GoogleBigqueryConnectionAzureOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionAzureOutputReference;

new GoogleBigqueryConnectionAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId">resetFederatedApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFederatedApplicationClientId` <a name="resetFederatedApplicationClientId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```java
public void resetFederatedApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.application">application</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantIdInput">customerTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">federatedApplicationClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantId">customerTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `customerTenantIdInput`<sup>Optional</sup> <a name="customerTenantIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```java
public java.lang.String getCustomerTenantIdInput();
```

- *Type:* java.lang.String

---

##### `federatedApplicationClientIdInput`<sup>Optional</sup> <a name="federatedApplicationClientIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```java
public java.lang.String getFederatedApplicationClientIdInput();
```

- *Type:* java.lang.String

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```java
public java.lang.String getCustomerTenantId();
```

- *Type:* java.lang.String

---

##### `federatedApplicationClientId`<sup>Required</sup> <a name="federatedApplicationClientId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```java
public java.lang.String getFederatedApplicationClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionAzure getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---


### GoogleBigqueryConnectionCloudResourceOutputReference <a name="GoogleBigqueryConnectionCloudResourceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionCloudResourceOutputReference;

new GoogleBigqueryConnectionCloudResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionCloudResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---


### GoogleBigqueryConnectionCloudSpannerOutputReference <a name="GoogleBigqueryConnectionCloudSpannerOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionCloudSpannerOutputReference;

new GoogleBigqueryConnectionCloudSpannerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism">resetMaxParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost">resetUseDataBoost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseParallelism">resetUseParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics">resetUseServerlessAnalytics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole"></a>

```java
public void resetDatabaseRole()
```

##### `resetMaxParallelism` <a name="resetMaxParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism"></a>

```java
public void resetMaxParallelism()
```

##### `resetUseDataBoost` <a name="resetUseDataBoost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost"></a>

```java
public void resetUseDataBoost()
```

##### `resetUseParallelism` <a name="resetUseParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```java
public void resetUseParallelism()
```

##### `resetUseServerlessAnalytics` <a name="resetUseServerlessAnalytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```java
public void resetUseServerlessAnalytics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput">maxParallelismInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput">useDataBoostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">useParallelismInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">useServerlessAnalyticsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRole">databaseRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelism">maxParallelism</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoost">useDataBoost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelism">useParallelism</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput"></a>

```java
public java.lang.String getDatabaseRoleInput();
```

- *Type:* java.lang.String

---

##### `maxParallelismInput`<sup>Optional</sup> <a name="maxParallelismInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput"></a>

```java
public java.lang.Number getMaxParallelismInput();
```

- *Type:* java.lang.Number

---

##### `useDataBoostInput`<sup>Optional</sup> <a name="useDataBoostInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput"></a>

```java
public java.lang.Object getUseDataBoostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useParallelismInput`<sup>Optional</sup> <a name="useParallelismInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```java
public java.lang.Object getUseParallelismInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useServerlessAnalyticsInput`<sup>Optional</sup> <a name="useServerlessAnalyticsInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```java
public java.lang.Object getUseServerlessAnalyticsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRole"></a>

```java
public java.lang.String getDatabaseRole();
```

- *Type:* java.lang.String

---

##### `maxParallelism`<sup>Required</sup> <a name="maxParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelism"></a>

```java
public java.lang.Number getMaxParallelism();
```

- *Type:* java.lang.Number

---

##### `useDataBoost`<sup>Required</sup> <a name="useDataBoost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoost"></a>

```java
public java.lang.Object getUseDataBoost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useParallelism`<sup>Required</sup> <a name="useParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```java
public java.lang.Object getUseParallelism();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useServerlessAnalytics`<sup>Required</sup> <a name="useServerlessAnalytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```java
public java.lang.Object getUseServerlessAnalytics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionCloudSpanner getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---


### GoogleBigqueryConnectionCloudSqlCredentialOutputReference <a name="GoogleBigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference;

new GoogleBigqueryConnectionCloudSqlCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionCloudSqlCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---


### GoogleBigqueryConnectionCloudSqlOutputReference <a name="GoogleBigqueryConnectionCloudSqlOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionCloudSqlOutputReference;

new GoogleBigqueryConnectionCloudSqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential">putCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredential` <a name="putCredential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```java
public void putCredential(GoogleBigqueryConnectionCloudSqlCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference">GoogleBigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```java
public GoogleBigqueryConnectionCloudSqlCredentialOutputReference getCredential();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference">GoogleBigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```java
public GoogleBigqueryConnectionCloudSqlCredential getCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionCloudSql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---


### GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference <a name="GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference;

new GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService"></a>

```java
public void resetMetastoreService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput"></a>

```java
public java.lang.String getMetastoreServiceInput();
```

- *Type:* java.lang.String

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionSparkMetastoreServiceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---


### GoogleBigqueryConnectionSparkOutputReference <a name="GoogleBigqueryConnectionSparkOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionSparkOutputReference;

new GoogleBigqueryConnectionSparkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig">putMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig">resetMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetastoreServiceConfig` <a name="putMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig"></a>

```java
public void putMetastoreServiceConfig(GoogleBigqueryConnectionSparkMetastoreServiceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig"></a>

```java
public void putSparkHistoryServerConfig(GoogleBigqueryConnectionSparkSparkHistoryServerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `resetMetastoreServiceConfig` <a name="resetMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig"></a>

```java
public void resetMetastoreServiceConfig()
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig"></a>

```java
public void resetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference">GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference">GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput">metastoreServiceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metastoreServiceConfig`<sup>Required</sup> <a name="metastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfig"></a>

```java
public GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference getMetastoreServiceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference">GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig"></a>

```java
public GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference">GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceConfigInput`<sup>Optional</sup> <a name="metastoreServiceConfigInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput"></a>

```java
public GoogleBigqueryConnectionSparkMetastoreServiceConfig getMetastoreServiceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput"></a>

```java
public GoogleBigqueryConnectionSparkSparkHistoryServerConfig getSparkHistoryServerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionSpark getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---


### GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference <a name="GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference;

new GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```java
public void resetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```java
public java.lang.String getDataprocClusterInput();
```

- *Type:* java.lang.String

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryConnectionSparkSparkHistoryServerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---


### GoogleBigqueryConnectionTimeoutsOutputReference <a name="GoogleBigqueryConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_connection.GoogleBigqueryConnectionTimeoutsOutputReference;

new GoogleBigqueryConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---



