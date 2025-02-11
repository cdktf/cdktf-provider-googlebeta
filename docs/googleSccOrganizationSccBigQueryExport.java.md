# `googleSccOrganizationSccBigQueryExport` Submodule <a name="`googleSccOrganizationSccBigQueryExport` Submodule" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccOrganizationSccBigQueryExport <a name="GoogleSccOrganizationSccBigQueryExport" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export google_scc_organization_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_organization_scc_big_query_export.GoogleSccOrganizationSccBigQueryExport;

GoogleSccOrganizationSccBigQueryExport.Builder.create(Construct scope, java.lang.String id)
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
    .bigQueryExportId(java.lang.String)
    .organization(java.lang.String)
//  .dataset(java.lang.String)
//  .description(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleSccOrganizationSccBigQueryExportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.bigQueryExportId">bigQueryExportId</a></code> | <code>java.lang.String</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.dataset">dataset</a></code> | <code>java.lang.String</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#id GoogleSccOrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.bigQueryExportId"></a>

- *Type:* java.lang.String

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#big_query_export_id GoogleSccOrganizationSccBigQueryExport#big_query_export_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#organization GoogleSccOrganizationSccBigQueryExport#organization}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.dataset"></a>

- *Type:* java.lang.String

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#dataset GoogleSccOrganizationSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#description GoogleSccOrganizationSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#filter GoogleSccOrganizationSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#id GoogleSccOrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#timeouts GoogleSccOrganizationSccBigQueryExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts"></a>

```java
public void putTimeouts(GoogleSccOrganizationSccBigQueryExportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

---

##### `resetDataset` <a name="resetDataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDataset"></a>

```java
public void resetDataset()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_organization_scc_big_query_export.GoogleSccOrganizationSccBigQueryExport;

GoogleSccOrganizationSccBigQueryExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_organization_scc_big_query_export.GoogleSccOrganizationSccBigQueryExport;

GoogleSccOrganizationSccBigQueryExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_organization_scc_big_query_export.GoogleSccOrganizationSccBigQueryExport;

GoogleSccOrganizationSccBigQueryExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_organization_scc_big_query_export.GoogleSccOrganizationSccBigQueryExport;

GoogleSccOrganizationSccBigQueryExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSccOrganizationSccBigQueryExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSccOrganizationSccBigQueryExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSccOrganizationSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccOrganizationSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.mostRecentEditor">mostRecentEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference">GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportIdInput">bigQueryExportIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportId">bigQueryExportId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `mostRecentEditor`<sup>Required</sup> <a name="mostRecentEditor" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.mostRecentEditor"></a>

```java
public java.lang.String getMostRecentEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeouts"></a>

```java
public GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference">GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `bigQueryExportIdInput`<sup>Optional</sup> <a name="bigQueryExportIdInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportIdInput"></a>

```java
public java.lang.String getBigQueryExportIdInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportId"></a>

```java
public java.lang.String getBigQueryExportId();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccOrganizationSccBigQueryExportConfig <a name="GoogleSccOrganizationSccBigQueryExportConfig" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_organization_scc_big_query_export.GoogleSccOrganizationSccBigQueryExportConfig;

GoogleSccOrganizationSccBigQueryExportConfig.builder()
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
    .bigQueryExportId(java.lang.String)
    .organization(java.lang.String)
//  .dataset(java.lang.String)
//  .description(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleSccOrganizationSccBigQueryExportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.bigQueryExportId">bigQueryExportId</a></code> | <code>java.lang.String</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dataset">dataset</a></code> | <code>java.lang.String</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#id GoogleSccOrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.bigQueryExportId"></a>

```java
public java.lang.String getBigQueryExportId();
```

- *Type:* java.lang.String

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#big_query_export_id GoogleSccOrganizationSccBigQueryExport#big_query_export_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#organization GoogleSccOrganizationSccBigQueryExport#organization}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#dataset GoogleSccOrganizationSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#description GoogleSccOrganizationSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#filter GoogleSccOrganizationSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#id GoogleSccOrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.timeouts"></a>

```java
public GoogleSccOrganizationSccBigQueryExportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#timeouts GoogleSccOrganizationSccBigQueryExport#timeouts}

---

### GoogleSccOrganizationSccBigQueryExportTimeouts <a name="GoogleSccOrganizationSccBigQueryExportTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_organization_scc_big_query_export.GoogleSccOrganizationSccBigQueryExportTimeouts;

GoogleSccOrganizationSccBigQueryExportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#create GoogleSccOrganizationSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#delete GoogleSccOrganizationSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#update GoogleSccOrganizationSccBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#create GoogleSccOrganizationSccBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#delete GoogleSccOrganizationSccBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_scc_organization_scc_big_query_export#update GoogleSccOrganizationSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference <a name="GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_organization_scc_big_query_export.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference;

new GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

---



