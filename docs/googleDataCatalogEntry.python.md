# `googleDataCatalogEntry` Submodule <a name="`googleDataCatalogEntry` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogEntry <a name="GoogleDataCatalogEntry" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry google_data_catalog_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entry_group: str,
  entry_id: str,
  description: str = None,
  display_name: str = None,
  gcs_fileset_spec: GoogleDataCatalogEntryGcsFilesetSpec = None,
  id: str = None,
  linked_resource: str = None,
  schema: str = None,
  timeouts: GoogleDataCatalogEntryTimeouts = None,
  type: str = None,
  user_specified_system: str = None,
  user_specified_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.entryGroup">entry_group</a></code> | <code>str</code> | The name of the entry group this entry is in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.entryId">entry_id</a></code> | <code>str</code> | The id of the entry to create. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.description">description</a></code> | <code>str</code> | Entry description, which can consist of several sentences or paragraphs that describe entry contents. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display information such as title and description. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.gcsFilesetSpec">gcs_fileset_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a></code> | gcs_fileset_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#id GoogleDataCatalogEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.linkedResource">linked_resource</a></code> | <code>str</code> | The resource this metadata entry refers to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.userSpecifiedSystem">user_specified_system</a></code> | <code>str</code> | This field indicates the entry's source system that Data Catalog does not integrate with. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.userSpecifiedType">user_specified_type</a></code> | <code>str</code> | Entry type if it does not fit any of the input-allowed values listed in EntryType enum above. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.entryGroup"></a>

- *Type:* str

The name of the entry group this entry is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#entry_group GoogleDataCatalogEntry#entry_group}

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.entryId"></a>

- *Type:* str

The id of the entry to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#entry_id GoogleDataCatalogEntry#entry_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.description"></a>

- *Type:* str

Entry description, which can consist of several sentences or paragraphs that describe entry contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#description GoogleDataCatalogEntry#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.displayName"></a>

- *Type:* str

Display information such as title and description.

A short name to identify the entry,
for example, "Analytics Data - Jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#display_name GoogleDataCatalogEntry#display_name}

---

##### `gcs_fileset_spec`<sup>Optional</sup> <a name="gcs_fileset_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.gcsFilesetSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

gcs_fileset_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#gcs_fileset_spec GoogleDataCatalogEntry#gcs_fileset_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#id GoogleDataCatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linked_resource`<sup>Optional</sup> <a name="linked_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.linkedResource"></a>

- *Type:* str

The resource this metadata entry refers to.

For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#linked_resource GoogleDataCatalogEntry#linked_resource}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.schema"></a>

- *Type:* str

Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#schema GoogleDataCatalogEntry#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#timeouts GoogleDataCatalogEntry#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.type"></a>

- *Type:* str

The type of the entry.

Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#type GoogleDataCatalogEntry#type}

---

##### `user_specified_system`<sup>Optional</sup> <a name="user_specified_system" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.userSpecifiedSystem"></a>

- *Type:* str

This field indicates the entry's source system that Data Catalog does not integrate with.

userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#user_specified_system GoogleDataCatalogEntry#user_specified_system}

---

##### `user_specified_type`<sup>Optional</sup> <a name="user_specified_type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.Initializer.parameter.userSpecifiedType"></a>

- *Type:* str

Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.

When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#user_specified_type GoogleDataCatalogEntry#user_specified_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putGcsFilesetSpec">put_gcs_fileset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetGcsFilesetSpec">reset_gcs_fileset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetLinkedResource">reset_linked_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetUserSpecifiedSystem">reset_user_specified_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetUserSpecifiedType">reset_user_specified_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gcs_fileset_spec` <a name="put_gcs_fileset_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putGcsFilesetSpec"></a>

```python
def put_gcs_fileset_spec(
  file_patterns: typing.List[str]
) -> None
```

###### `file_patterns`<sup>Required</sup> <a name="file_patterns" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putGcsFilesetSpec.parameter.filePatterns"></a>

- *Type:* typing.List[str]

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#file_patterns GoogleDataCatalogEntry#file_patterns}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#create GoogleDataCatalogEntry#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#delete GoogleDataCatalogEntry#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#update GoogleDataCatalogEntry#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gcs_fileset_spec` <a name="reset_gcs_fileset_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetGcsFilesetSpec"></a>

```python
def reset_gcs_fileset_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_linked_resource` <a name="reset_linked_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetLinkedResource"></a>

```python
def reset_linked_resource() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user_specified_system` <a name="reset_user_specified_system" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetUserSpecifiedSystem"></a>

```python
def reset_user_specified_system() -> None
```

##### `reset_user_specified_type` <a name="reset_user_specified_type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.resetUserSpecifiedType"></a>

```python
def reset_user_specified_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataCatalogEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataCatalogEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataCatalogEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataCatalogEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.bigqueryDateShardedSpec">bigquery_date_sharded_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList">GoogleDataCatalogEntryBigqueryDateShardedSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.bigqueryTableSpec">bigquery_table_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList">GoogleDataCatalogEntryBigqueryTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.gcsFilesetSpec">gcs_fileset_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference">GoogleDataCatalogEntryGcsFilesetSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.integratedSystem">integrated_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference">GoogleDataCatalogEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryGroupInput">entry_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryIdInput">entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.gcsFilesetSpecInput">gcs_fileset_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.linkedResourceInput">linked_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedSystemInput">user_specified_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedTypeInput">user_specified_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryGroup">entry_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryId">entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.linkedResource">linked_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedSystem">user_specified_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedType">user_specified_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_date_sharded_spec`<sup>Required</sup> <a name="bigquery_date_sharded_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.bigqueryDateShardedSpec"></a>

```python
bigquery_date_sharded_spec: GoogleDataCatalogEntryBigqueryDateShardedSpecList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList">GoogleDataCatalogEntryBigqueryDateShardedSpecList</a>

---

##### `bigquery_table_spec`<sup>Required</sup> <a name="bigquery_table_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.bigqueryTableSpec"></a>

```python
bigquery_table_spec: GoogleDataCatalogEntryBigqueryTableSpecList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList">GoogleDataCatalogEntryBigqueryTableSpecList</a>

---

##### `gcs_fileset_spec`<sup>Required</sup> <a name="gcs_fileset_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.gcsFilesetSpec"></a>

```python
gcs_fileset_spec: GoogleDataCatalogEntryGcsFilesetSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference">GoogleDataCatalogEntryGcsFilesetSpecOutputReference</a>

---

##### `integrated_system`<sup>Required</sup> <a name="integrated_system" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.integratedSystem"></a>

```python
integrated_system: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.timeouts"></a>

```python
timeouts: GoogleDataCatalogEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference">GoogleDataCatalogEntryTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entry_group_input`<sup>Optional</sup> <a name="entry_group_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryGroupInput"></a>

```python
entry_group_input: str
```

- *Type:* str

---

##### `entry_id_input`<sup>Optional</sup> <a name="entry_id_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryIdInput"></a>

```python
entry_id_input: str
```

- *Type:* str

---

##### `gcs_fileset_spec_input`<sup>Optional</sup> <a name="gcs_fileset_spec_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.gcsFilesetSpecInput"></a>

```python
gcs_fileset_spec_input: GoogleDataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_resource_input`<sup>Optional</sup> <a name="linked_resource_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.linkedResourceInput"></a>

```python
linked_resource_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataCatalogEntryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_specified_system_input`<sup>Optional</sup> <a name="user_specified_system_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedSystemInput"></a>

```python
user_specified_system_input: str
```

- *Type:* str

---

##### `user_specified_type_input`<sup>Optional</sup> <a name="user_specified_type_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedTypeInput"></a>

```python
user_specified_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryGroup"></a>

```python
entry_group: str
```

- *Type:* str

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_resource`<sup>Required</sup> <a name="linked_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.linkedResource"></a>

```python
linked_resource: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_specified_system`<sup>Required</sup> <a name="user_specified_system" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedSystem"></a>

```python
user_specified_system: str
```

- *Type:* str

---

##### `user_specified_type`<sup>Required</sup> <a name="user_specified_type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.userSpecifiedType"></a>

```python
user_specified_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogEntryBigqueryDateShardedSpec <a name="GoogleDataCatalogEntryBigqueryDateShardedSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec()
```


### GoogleDataCatalogEntryBigqueryTableSpec <a name="GoogleDataCatalogEntryBigqueryTableSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec()
```


### GoogleDataCatalogEntryBigqueryTableSpecTableSpec <a name="GoogleDataCatalogEntryBigqueryTableSpecTableSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec()
```


### GoogleDataCatalogEntryBigqueryTableSpecViewSpec <a name="GoogleDataCatalogEntryBigqueryTableSpecViewSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec()
```


### GoogleDataCatalogEntryConfig <a name="GoogleDataCatalogEntryConfig" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entry_group: str,
  entry_id: str,
  description: str = None,
  display_name: str = None,
  gcs_fileset_spec: GoogleDataCatalogEntryGcsFilesetSpec = None,
  id: str = None,
  linked_resource: str = None,
  schema: str = None,
  timeouts: GoogleDataCatalogEntryTimeouts = None,
  type: str = None,
  user_specified_system: str = None,
  user_specified_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.entryGroup">entry_group</a></code> | <code>str</code> | The name of the entry group this entry is in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.entryId">entry_id</a></code> | <code>str</code> | The id of the entry to create. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.description">description</a></code> | <code>str</code> | Entry description, which can consist of several sentences or paragraphs that describe entry contents. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.displayName">display_name</a></code> | <code>str</code> | Display information such as title and description. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.gcsFilesetSpec">gcs_fileset_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a></code> | gcs_fileset_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#id GoogleDataCatalogEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.linkedResource">linked_resource</a></code> | <code>str</code> | The resource this metadata entry refers to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.schema">schema</a></code> | <code>str</code> | Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.type">type</a></code> | <code>str</code> | The type of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.userSpecifiedSystem">user_specified_system</a></code> | <code>str</code> | This field indicates the entry's source system that Data Catalog does not integrate with. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.userSpecifiedType">user_specified_type</a></code> | <code>str</code> | Entry type if it does not fit any of the input-allowed values listed in EntryType enum above. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.entryGroup"></a>

```python
entry_group: str
```

- *Type:* str

The name of the entry group this entry is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#entry_group GoogleDataCatalogEntry#entry_group}

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

The id of the entry to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#entry_id GoogleDataCatalogEntry#entry_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Entry description, which can consist of several sentences or paragraphs that describe entry contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#description GoogleDataCatalogEntry#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display information such as title and description.

A short name to identify the entry,
for example, "Analytics Data - Jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#display_name GoogleDataCatalogEntry#display_name}

---

##### `gcs_fileset_spec`<sup>Optional</sup> <a name="gcs_fileset_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.gcsFilesetSpec"></a>

```python
gcs_fileset_spec: GoogleDataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

gcs_fileset_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#gcs_fileset_spec GoogleDataCatalogEntry#gcs_fileset_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#id GoogleDataCatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linked_resource`<sup>Optional</sup> <a name="linked_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.linkedResource"></a>

```python
linked_resource: str
```

- *Type:* str

The resource this metadata entry refers to.

For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#linked_resource GoogleDataCatalogEntry#linked_resource}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#schema GoogleDataCatalogEntry#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.timeouts"></a>

```python
timeouts: GoogleDataCatalogEntryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#timeouts GoogleDataCatalogEntry#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the entry.

Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#type GoogleDataCatalogEntry#type}

---

##### `user_specified_system`<sup>Optional</sup> <a name="user_specified_system" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.userSpecifiedSystem"></a>

```python
user_specified_system: str
```

- *Type:* str

This field indicates the entry's source system that Data Catalog does not integrate with.

userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#user_specified_system GoogleDataCatalogEntry#user_specified_system}

---

##### `user_specified_type`<sup>Optional</sup> <a name="user_specified_type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryConfig.property.userSpecifiedType"></a>

```python
user_specified_type: str
```

- *Type:* str

Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.

When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#user_specified_type GoogleDataCatalogEntry#user_specified_type}

---

### GoogleDataCatalogEntryGcsFilesetSpec <a name="GoogleDataCatalogEntryGcsFilesetSpec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec(
  file_patterns: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec.property.filePatterns">file_patterns</a></code> | <code>typing.List[str]</code> | Patterns to identify a set of files in Google Cloud Storage. |

---

##### `file_patterns`<sup>Required</sup> <a name="file_patterns" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec.property.filePatterns"></a>

```python
file_patterns: typing.List[str]
```

- *Type:* typing.List[str]

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#file_patterns GoogleDataCatalogEntry#file_patterns}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs <a name="GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs()
```


### GoogleDataCatalogEntryTimeouts <a name="GoogleDataCatalogEntryTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#create GoogleDataCatalogEntry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#delete GoogleDataCatalogEntry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#update GoogleDataCatalogEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#create GoogleDataCatalogEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#delete GoogleDataCatalogEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_data_catalog_entry#update GoogleDataCatalogEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogEntryBigqueryDateShardedSpecList <a name="GoogleDataCatalogEntryBigqueryDateShardedSpecList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference <a name="GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec">GoogleDataCatalogEntryBigqueryDateShardedSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogEntryBigqueryDateShardedSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryDateShardedSpec">GoogleDataCatalogEntryBigqueryDateShardedSpec</a>

---


### GoogleDataCatalogEntryBigqueryTableSpecList <a name="GoogleDataCatalogEntryBigqueryTableSpecList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataCatalogEntryBigqueryTableSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataCatalogEntryBigqueryTableSpecOutputReference <a name="GoogleDataCatalogEntryBigqueryTableSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType">table_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec">table_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList">GoogleDataCatalogEntryBigqueryTableSpecTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec">view_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList">GoogleDataCatalogEntryBigqueryTableSpecViewSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec">GoogleDataCatalogEntryBigqueryTableSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_source_type`<sup>Required</sup> <a name="table_source_type" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType"></a>

```python
table_source_type: str
```

- *Type:* str

---

##### `table_spec`<sup>Required</sup> <a name="table_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec"></a>

```python
table_spec: GoogleDataCatalogEntryBigqueryTableSpecTableSpecList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList">GoogleDataCatalogEntryBigqueryTableSpecTableSpecList</a>

---

##### `view_spec`<sup>Required</sup> <a name="view_spec" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec"></a>

```python
view_spec: GoogleDataCatalogEntryBigqueryTableSpecViewSpecList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList">GoogleDataCatalogEntryBigqueryTableSpecViewSpecList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogEntryBigqueryTableSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpec">GoogleDataCatalogEntryBigqueryTableSpec</a>

---


### GoogleDataCatalogEntryBigqueryTableSpecTableSpecList <a name="GoogleDataCatalogEntryBigqueryTableSpecTableSpecList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference <a name="GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry">grouped_entry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec">GoogleDataCatalogEntryBigqueryTableSpecTableSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grouped_entry`<sup>Required</sup> <a name="grouped_entry" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry"></a>

```python
grouped_entry: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogEntryBigqueryTableSpecTableSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecTableSpec">GoogleDataCatalogEntryBigqueryTableSpecTableSpec</a>

---


### GoogleDataCatalogEntryBigqueryTableSpecViewSpecList <a name="GoogleDataCatalogEntryBigqueryTableSpecViewSpecList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference <a name="GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery">view_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec">GoogleDataCatalogEntryBigqueryTableSpecViewSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `view_query`<sup>Required</sup> <a name="view_query" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery"></a>

```python
view_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogEntryBigqueryTableSpecViewSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryBigqueryTableSpecViewSpec">GoogleDataCatalogEntryBigqueryTableSpecViewSpec</a>

---


### GoogleDataCatalogEntryGcsFilesetSpecOutputReference <a name="GoogleDataCatalogEntryGcsFilesetSpecOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs">sample_gcs_file_specs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput">file_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns">file_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sample_gcs_file_specs`<sup>Required</sup> <a name="sample_gcs_file_specs" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs"></a>

```python
sample_gcs_file_specs: GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a>

---

##### `file_patterns_input`<sup>Optional</sup> <a name="file_patterns_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput"></a>

```python
file_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_patterns`<sup>Required</sup> <a name="file_patterns" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns"></a>

```python
file_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpec">GoogleDataCatalogEntryGcsFilesetSpec</a>

---


### GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList <a name="GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference <a name="GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">GoogleDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a>

---


### GoogleDataCatalogEntryTimeoutsOutputReference <a name="GoogleDataCatalogEntryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry

googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataCatalogEntryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogEntry.GoogleDataCatalogEntryTimeouts">GoogleDataCatalogEntryTimeouts</a>]

---



