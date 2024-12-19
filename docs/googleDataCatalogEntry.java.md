# `googleDataCatalogEntry` Submodule <a name="`googleDataCatalogEntry` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogEntry <a name="GoogleDataCatalogEntry" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry google_data_catalog_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntry;

GoogleDataCatalogEntry.Builder.create(Construct scope, java.lang.String id)
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
    .entryGroup(java.lang.String)
    .entryId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .gcsFilesetSpec(GoogleDataCatalogEntryGcsFilesetSpec)
//  .id(java.lang.String)
//  .linkedResource(java.lang.String)
//  .schema(java.lang.String)
//  .timeouts(GoogleDataCatalogEntryTimeouts)
//  .type(java.lang.String)
//  .userSpecifiedSystem(java.lang.String)
//  .userSpecifiedType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.entryGroup">entryGroup</a></code> | <code>java.lang.String</code> | The name of the entry group this entry is in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.entryId">entryId</a></code> | <code>java.lang.String</code> | The id of the entry to create. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Entry description, which can consist of several sentences or paragraphs that describe entry contents. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display information such as title and description. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.gcsFilesetSpec">gcsFilesetSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a></code> | gcs_fileset_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#id GoogleDataCatalogEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.linkedResource">linkedResource</a></code> | <code>java.lang.String</code> | The resource this metadata entry refers to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.userSpecifiedSystem">userSpecifiedSystem</a></code> | <code>java.lang.String</code> | This field indicates the entry's source system that Data Catalog does not integrate with. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.userSpecifiedType">userSpecifiedType</a></code> | <code>java.lang.String</code> | Entry type if it does not fit any of the input-allowed values listed in EntryType enum above. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entryGroup`<sup>Required</sup> <a name="entryGroup" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.entryGroup"></a>

- *Type:* java.lang.String

The name of the entry group this entry is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#entry_group GoogleDataCatalogEntry#entry_group}

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.entryId"></a>

- *Type:* java.lang.String

The id of the entry to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#entry_id GoogleDataCatalogEntry#entry_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Entry description, which can consist of several sentences or paragraphs that describe entry contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#description GoogleDataCatalogEntry#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display information such as title and description.

A short name to identify the entry,
for example, "Analytics Data - Jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#display_name GoogleDataCatalogEntry#display_name}

---

##### `gcsFilesetSpec`<sup>Optional</sup> <a name="gcsFilesetSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.gcsFilesetSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

gcs_fileset_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#gcs_fileset_spec GoogleDataCatalogEntry#gcs_fileset_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#id GoogleDataCatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkedResource`<sup>Optional</sup> <a name="linkedResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.linkedResource"></a>

- *Type:* java.lang.String

The resource this metadata entry refers to.

For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#linked_resource GoogleDataCatalogEntry#linked_resource}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#schema GoogleDataCatalogEntry#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#timeouts GoogleDataCatalogEntry#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the entry.

Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#type GoogleDataCatalogEntry#type}

---

##### `userSpecifiedSystem`<sup>Optional</sup> <a name="userSpecifiedSystem" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.userSpecifiedSystem"></a>

- *Type:* java.lang.String

This field indicates the entry's source system that Data Catalog does not integrate with.

userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#user_specified_system GoogleDataCatalogEntry#user_specified_system}

---

##### `userSpecifiedType`<sup>Optional</sup> <a name="userSpecifiedType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.userSpecifiedType"></a>

- *Type:* java.lang.String

Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.

When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#user_specified_type GoogleDataCatalogEntry#user_specified_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putGcsFilesetSpec">putGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetGcsFilesetSpec">resetGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetLinkedResource">resetLinkedResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetUserSpecifiedSystem">resetUserSpecifiedSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetUserSpecifiedType">resetUserSpecifiedType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGcsFilesetSpec` <a name="putGcsFilesetSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putGcsFilesetSpec"></a>

```java
public void putGcsFilesetSpec(GoogleDataCatalogEntryGcsFilesetSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putGcsFilesetSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataCatalogEntryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGcsFilesetSpec` <a name="resetGcsFilesetSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetGcsFilesetSpec"></a>

```java
public void resetGcsFilesetSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetId"></a>

```java
public void resetId()
```

##### `resetLinkedResource` <a name="resetLinkedResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetLinkedResource"></a>

```java
public void resetLinkedResource()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetType"></a>

```java
public void resetType()
```

##### `resetUserSpecifiedSystem` <a name="resetUserSpecifiedSystem" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetUserSpecifiedSystem"></a>

```java
public void resetUserSpecifiedSystem()
```

##### `resetUserSpecifiedType` <a name="resetUserSpecifiedType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetUserSpecifiedType"></a>

```java
public void resetUserSpecifiedType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataCatalogEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntry;

GoogleDataCatalogEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntry;

GoogleDataCatalogEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntry;

GoogleDataCatalogEntry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntry;

GoogleDataCatalogEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataCatalogEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataCatalogEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataCatalogEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataCatalogEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.bigqueryDateShardedSpec">bigqueryDateShardedSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList">GoogleDataCatalogEntryBigqueryDateShardedSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.bigqueryTableSpec">bigqueryTableSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList">GoogleDataCatalogEntryBigqueryTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.gcsFilesetSpec">gcsFilesetSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference">GoogleDataCatalogEntryGcsFilesetSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.integratedSystem">integratedSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference">GoogleDataCatalogEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryGroupInput">entryGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryIdInput">entryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.gcsFilesetSpecInput">gcsFilesetSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.linkedResourceInput">linkedResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedSystemInput">userSpecifiedSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedTypeInput">userSpecifiedTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryGroup">entryGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryId">entryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.linkedResource">linkedResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedSystem">userSpecifiedSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedType">userSpecifiedType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bigqueryDateShardedSpec`<sup>Required</sup> <a name="bigqueryDateShardedSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.bigqueryDateShardedSpec"></a>

```java
public GoogleDataCatalogEntryBigqueryDateShardedSpecList getBigqueryDateShardedSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList">GoogleDataCatalogEntryBigqueryDateShardedSpecList</a>

---

##### `bigqueryTableSpec`<sup>Required</sup> <a name="bigqueryTableSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.bigqueryTableSpec"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpecList getBigqueryTableSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList">GoogleDataCatalogEntryBigqueryTableSpecList</a>

---

##### `gcsFilesetSpec`<sup>Required</sup> <a name="gcsFilesetSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.gcsFilesetSpec"></a>

```java
public GoogleDataCatalogEntryGcsFilesetSpecOutputReference getGcsFilesetSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference">GoogleDataCatalogEntryGcsFilesetSpecOutputReference</a>

---

##### `integratedSystem`<sup>Required</sup> <a name="integratedSystem" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.integratedSystem"></a>

```java
public java.lang.String getIntegratedSystem();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.timeouts"></a>

```java
public GoogleDataCatalogEntryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference">GoogleDataCatalogEntryTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entryGroupInput`<sup>Optional</sup> <a name="entryGroupInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryGroupInput"></a>

```java
public java.lang.String getEntryGroupInput();
```

- *Type:* java.lang.String

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryIdInput"></a>

```java
public java.lang.String getEntryIdInput();
```

- *Type:* java.lang.String

---

##### `gcsFilesetSpecInput`<sup>Optional</sup> <a name="gcsFilesetSpecInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.gcsFilesetSpecInput"></a>

```java
public GoogleDataCatalogEntryGcsFilesetSpec getGcsFilesetSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkedResourceInput`<sup>Optional</sup> <a name="linkedResourceInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.linkedResourceInput"></a>

```java
public java.lang.String getLinkedResourceInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userSpecifiedSystemInput`<sup>Optional</sup> <a name="userSpecifiedSystemInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedSystemInput"></a>

```java
public java.lang.String getUserSpecifiedSystemInput();
```

- *Type:* java.lang.String

---

##### `userSpecifiedTypeInput`<sup>Optional</sup> <a name="userSpecifiedTypeInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedTypeInput"></a>

```java
public java.lang.String getUserSpecifiedTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entryGroup`<sup>Required</sup> <a name="entryGroup" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryGroup"></a>

```java
public java.lang.String getEntryGroup();
```

- *Type:* java.lang.String

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedResource`<sup>Required</sup> <a name="linkedResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.linkedResource"></a>

```java
public java.lang.String getLinkedResource();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userSpecifiedSystem`<sup>Required</sup> <a name="userSpecifiedSystem" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedSystem"></a>

```java
public java.lang.String getUserSpecifiedSystem();
```

- *Type:* java.lang.String

---

##### `userSpecifiedType`<sup>Required</sup> <a name="userSpecifiedType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedType"></a>

```java
public java.lang.String getUserSpecifiedType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogEntryBigqueryDateShardedSpec <a name="GoogleDataCatalogEntryBigqueryDateShardedSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryDateShardedSpec;

GoogleDataCatalogEntryBigqueryDateShardedSpec.builder()
    .build();
```


### GoogleDataCatalogEntryBigqueryTableSpec <a name="GoogleDataCatalogEntryBigqueryTableSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpec;

GoogleDataCatalogEntryBigqueryTableSpec.builder()
    .build();
```


### GoogleDataCatalogEntryBigqueryTableSpecTableSpec <a name="GoogleDataCatalogEntryBigqueryTableSpecTableSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec;

GoogleDataCatalogEntryBigqueryTableSpecTableSpec.builder()
    .build();
```


### GoogleDataCatalogEntryBigqueryTableSpecViewSpec <a name="GoogleDataCatalogEntryBigqueryTableSpecViewSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec;

GoogleDataCatalogEntryBigqueryTableSpecViewSpec.builder()
    .build();
```


### GoogleDataCatalogEntryConfig <a name="GoogleDataCatalogEntryConfig" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryConfig;

GoogleDataCatalogEntryConfig.builder()
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
    .entryGroup(java.lang.String)
    .entryId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .gcsFilesetSpec(GoogleDataCatalogEntryGcsFilesetSpec)
//  .id(java.lang.String)
//  .linkedResource(java.lang.String)
//  .schema(java.lang.String)
//  .timeouts(GoogleDataCatalogEntryTimeouts)
//  .type(java.lang.String)
//  .userSpecifiedSystem(java.lang.String)
//  .userSpecifiedType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.entryGroup">entryGroup</a></code> | <code>java.lang.String</code> | The name of the entry group this entry is in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.entryId">entryId</a></code> | <code>java.lang.String</code> | The id of the entry to create. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Entry description, which can consist of several sentences or paragraphs that describe entry contents. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display information such as title and description. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.gcsFilesetSpec">gcsFilesetSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a></code> | gcs_fileset_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#id GoogleDataCatalogEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.linkedResource">linkedResource</a></code> | <code>java.lang.String</code> | The resource this metadata entry refers to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.userSpecifiedSystem">userSpecifiedSystem</a></code> | <code>java.lang.String</code> | This field indicates the entry's source system that Data Catalog does not integrate with. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.userSpecifiedType">userSpecifiedType</a></code> | <code>java.lang.String</code> | Entry type if it does not fit any of the input-allowed values listed in EntryType enum above. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entryGroup`<sup>Required</sup> <a name="entryGroup" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.entryGroup"></a>

```java
public java.lang.String getEntryGroup();
```

- *Type:* java.lang.String

The name of the entry group this entry is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#entry_group GoogleDataCatalogEntry#entry_group}

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

The id of the entry to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#entry_id GoogleDataCatalogEntry#entry_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Entry description, which can consist of several sentences or paragraphs that describe entry contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#description GoogleDataCatalogEntry#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display information such as title and description.

A short name to identify the entry,
for example, "Analytics Data - Jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#display_name GoogleDataCatalogEntry#display_name}

---

##### `gcsFilesetSpec`<sup>Optional</sup> <a name="gcsFilesetSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.gcsFilesetSpec"></a>

```java
public GoogleDataCatalogEntryGcsFilesetSpec getGcsFilesetSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

gcs_fileset_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#gcs_fileset_spec GoogleDataCatalogEntry#gcs_fileset_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#id GoogleDataCatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkedResource`<sup>Optional</sup> <a name="linkedResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.linkedResource"></a>

```java
public java.lang.String getLinkedResource();
```

- *Type:* java.lang.String

The resource this metadata entry refers to.

For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#linked_resource GoogleDataCatalogEntry#linked_resource}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#schema GoogleDataCatalogEntry#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.timeouts"></a>

```java
public GoogleDataCatalogEntryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#timeouts GoogleDataCatalogEntry#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the entry.

Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#type GoogleDataCatalogEntry#type}

---

##### `userSpecifiedSystem`<sup>Optional</sup> <a name="userSpecifiedSystem" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.userSpecifiedSystem"></a>

```java
public java.lang.String getUserSpecifiedSystem();
```

- *Type:* java.lang.String

This field indicates the entry's source system that Data Catalog does not integrate with.

userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#user_specified_system GoogleDataCatalogEntry#user_specified_system}

---

##### `userSpecifiedType`<sup>Optional</sup> <a name="userSpecifiedType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.userSpecifiedType"></a>

```java
public java.lang.String getUserSpecifiedType();
```

- *Type:* java.lang.String

Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.

When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#user_specified_type GoogleDataCatalogEntry#user_specified_type}

---

### GoogleDataCatalogEntryGcsFilesetSpec <a name="GoogleDataCatalogEntryGcsFilesetSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryGcsFilesetSpec;

GoogleDataCatalogEntryGcsFilesetSpec.builder()
    .filePatterns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec.property.filePatterns">filePatterns</a></code> | <code>java.util.List<java.lang.String></code> | Patterns to identify a set of files in Google Cloud Storage. |

---

##### `filePatterns`<sup>Required</sup> <a name="filePatterns" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec.property.filePatterns"></a>

```java
public java.util.List<java.lang.String> getFilePatterns();
```

- *Type:* java.util.List<java.lang.String>

Patterns to identify a set of files in Google Cloud Storage.

See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:

* gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.
* gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.
* gs://bucket_name/file*: matches files prefixed by file in bucket_name
* gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
* gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
* gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
* gs://bucket_name/a/* /b: matches all files in bucket_name that match a/* /b pattern, such as a/c/b, a/d/b
* gs://another_bucket/a.txt: matches gs://another_bucket/a.txt

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#file_patterns GoogleDataCatalogEntry#file_patterns}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs <a name="GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs;

GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs.builder()
    .build();
```


### GoogleDataCatalogEntryTimeouts <a name="GoogleDataCatalogEntryTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryTimeouts;

GoogleDataCatalogEntryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#create GoogleDataCatalogEntry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#delete GoogleDataCatalogEntry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#update GoogleDataCatalogEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#create GoogleDataCatalogEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#delete GoogleDataCatalogEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_entry#update GoogleDataCatalogEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogEntryBigqueryDateShardedSpecList <a name="GoogleDataCatalogEntryBigqueryDateShardedSpecList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryDateShardedSpecList;

new GoogleDataCatalogEntryBigqueryDateShardedSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.get"></a>

```java
public GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference <a name="GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference;

new GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec">GoogleDataCatalogEntryBigqueryDateShardedSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue"></a>

```java
public GoogleDataCatalogEntryBigqueryDateShardedSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec">GoogleDataCatalogEntryBigqueryDateShardedSpec</a>

---


### GoogleDataCatalogEntryBigqueryTableSpecList <a name="GoogleDataCatalogEntryBigqueryTableSpecList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpecList;

new GoogleDataCatalogEntryBigqueryTableSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.get"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataCatalogEntryBigqueryTableSpecOutputReference <a name="GoogleDataCatalogEntryBigqueryTableSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference;

new GoogleDataCatalogEntryBigqueryTableSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType">tableSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec">tableSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList">GoogleDataCatalogEntryBigqueryTableSpecTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec">viewSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList">GoogleDataCatalogEntryBigqueryTableSpecViewSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec">GoogleDataCatalogEntryBigqueryTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tableSourceType`<sup>Required</sup> <a name="tableSourceType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType"></a>

```java
public java.lang.String getTableSourceType();
```

- *Type:* java.lang.String

---

##### `tableSpec`<sup>Required</sup> <a name="tableSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpecTableSpecList getTableSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList">GoogleDataCatalogEntryBigqueryTableSpecTableSpecList</a>

---

##### `viewSpec`<sup>Required</sup> <a name="viewSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpecViewSpecList getViewSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList">GoogleDataCatalogEntryBigqueryTableSpecViewSpecList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec">GoogleDataCatalogEntryBigqueryTableSpec</a>

---


### GoogleDataCatalogEntryBigqueryTableSpecTableSpecList <a name="GoogleDataCatalogEntryBigqueryTableSpecTableSpecList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList;

new GoogleDataCatalogEntryBigqueryTableSpecTableSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.get"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference <a name="GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference;

new GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry">groupedEntry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec">GoogleDataCatalogEntryBigqueryTableSpecTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupedEntry`<sup>Required</sup> <a name="groupedEntry" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry"></a>

```java
public java.lang.String getGroupedEntry();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpecTableSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec">GoogleDataCatalogEntryBigqueryTableSpecTableSpec</a>

---


### GoogleDataCatalogEntryBigqueryTableSpecViewSpecList <a name="GoogleDataCatalogEntryBigqueryTableSpecViewSpecList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList;

new GoogleDataCatalogEntryBigqueryTableSpecViewSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.get"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference <a name="GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference;

new GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery">viewQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec">GoogleDataCatalogEntryBigqueryTableSpecViewSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `viewQuery`<sup>Required</sup> <a name="viewQuery" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery"></a>

```java
public java.lang.String getViewQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue"></a>

```java
public GoogleDataCatalogEntryBigqueryTableSpecViewSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec">GoogleDataCatalogEntryBigqueryTableSpecViewSpec</a>

---


### GoogleDataCatalogEntryGcsFilesetSpecOutputReference <a name="GoogleDataCatalogEntryGcsFilesetSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference;

new GoogleDataCatalogEntryGcsFilesetSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs">sampleGcsFileSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput">filePatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns">filePatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sampleGcsFileSpecs`<sup>Required</sup> <a name="sampleGcsFileSpecs" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs"></a>

```java
public GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList getSampleGcsFileSpecs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a>

---

##### `filePatternsInput`<sup>Optional</sup> <a name="filePatternsInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput"></a>

```java
public java.util.List<java.lang.String> getFilePatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filePatterns`<sup>Required</sup> <a name="filePatterns" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns"></a>

```java
public java.util.List<java.lang.String> getFilePatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue"></a>

```java
public GoogleDataCatalogEntryGcsFilesetSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

---


### GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList <a name="GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList;

new GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get"></a>

```java
public GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference <a name="GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference;

new GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes">sizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes"></a>

```java
public java.lang.Number getSizeBytes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue"></a>

```java
public GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a>

---


### GoogleDataCatalogEntryTimeoutsOutputReference <a name="GoogleDataCatalogEntryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_entry.GoogleDataCatalogEntryTimeoutsOutputReference;

new GoogleDataCatalogEntryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>

---



