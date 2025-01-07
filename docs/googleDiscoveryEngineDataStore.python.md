# `googleDiscoveryEngineDataStore` Submodule <a name="`googleDiscoveryEngineDataStore` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineDataStore <a name="GoogleDiscoveryEngineDataStore" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store google_discovery_engine_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_config: str,
  data_store_id: str,
  display_name: str,
  industry_vertical: str,
  location: str,
  create_advanced_site_search: typing.Union[bool, IResolvable] = None,
  document_processing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfig = None,
  id: str = None,
  project: str = None,
  skip_default_schema_creation: typing.Union[bool, IResolvable] = None,
  solution_types: typing.List[str] = None,
  timeouts: GoogleDiscoveryEngineDataStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.contentConfig">content_config</a></code> | <code>str</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.dataStoreId">data_store_id</a></code> | <code>str</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.documentProcessingConfig">document_processing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | document_processing_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#id GoogleDiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#project GoogleDiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.skipDefaultSchemaCreation">skip_default_schema_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean flag indicating whether to skip the default schema creation for the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.contentConfig"></a>

- *Type:* str

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#content_config GoogleDiscoveryEngineDataStore#content_config}

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.dataStoreId"></a>

- *Type:* str

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#data_store_id GoogleDiscoveryEngineDataStore#data_store_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#display_name GoogleDiscoveryEngineDataStore#display_name}

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.industryVertical"></a>

- *Type:* str

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#industry_vertical GoogleDiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#location GoogleDiscoveryEngineDataStore#location}

---

##### `create_advanced_site_search`<sup>Optional</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.createAdvancedSiteSearch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#create_advanced_site_search GoogleDiscoveryEngineDataStore#create_advanced_site_search}

---

##### `document_processing_config`<sup>Optional</sup> <a name="document_processing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.documentProcessingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a>

document_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#document_processing_config GoogleDiscoveryEngineDataStore#document_processing_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#id GoogleDiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#project GoogleDiscoveryEngineDataStore#project}.

---

##### `skip_default_schema_creation`<sup>Optional</sup> <a name="skip_default_schema_creation" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.skipDefaultSchemaCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean flag indicating whether to skip the default schema creation for the data store.

Only enable this flag if you are certain that the default
schema is incompatible with your use case.
If set to true, you must manually create a schema for the data store
before any documents can be ingested.
This flag cannot be specified if 'data_store.starting_schema' is
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#skip_default_schema_creation GoogleDiscoveryEngineDataStore#skip_default_schema_creation}

---

##### `solution_types`<sup>Optional</sup> <a name="solution_types" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.solutionTypes"></a>

- *Type:* typing.List[str]

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#solution_types GoogleDiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#timeouts GoogleDiscoveryEngineDataStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putDocumentProcessingConfig">put_document_processing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetCreateAdvancedSiteSearch">reset_create_advanced_site_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetDocumentProcessingConfig">reset_document_processing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetSkipDefaultSchemaCreation">reset_skip_default_schema_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetSolutionTypes">reset_solution_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_document_processing_config` <a name="put_document_processing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putDocumentProcessingConfig"></a>

```python
def put_document_processing_config(
  chunking_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig = None,
  default_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig = None,
  parsing_config_overrides: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]] = None
) -> None
```

###### `chunking_config`<sup>Optional</sup> <a name="chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putDocumentProcessingConfig.parameter.chunkingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#chunking_config GoogleDiscoveryEngineDataStore#chunking_config}

---

###### `default_parsing_config`<sup>Optional</sup> <a name="default_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putDocumentProcessingConfig.parameter.defaultParsingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

default_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#default_parsing_config GoogleDiscoveryEngineDataStore#default_parsing_config}

---

###### `parsing_config_overrides`<sup>Optional</sup> <a name="parsing_config_overrides" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putDocumentProcessingConfig.parameter.parsingConfigOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

parsing_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#parsing_config_overrides GoogleDiscoveryEngineDataStore#parsing_config_overrides}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#create GoogleDiscoveryEngineDataStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#delete GoogleDiscoveryEngineDataStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#update GoogleDiscoveryEngineDataStore#update}.

---

##### `reset_create_advanced_site_search` <a name="reset_create_advanced_site_search" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetCreateAdvancedSiteSearch"></a>

```python
def reset_create_advanced_site_search() -> None
```

##### `reset_document_processing_config` <a name="reset_document_processing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetDocumentProcessingConfig"></a>

```python
def reset_document_processing_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_skip_default_schema_creation` <a name="reset_skip_default_schema_creation" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetSkipDefaultSchemaCreation"></a>

```python
def reset_skip_default_schema_creation() -> None
```

##### `reset_solution_types` <a name="reset_solution_types" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetSolutionTypes"></a>

```python
def reset_solution_types() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineDataStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.defaultSchemaId">default_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.documentProcessingConfig">document_processing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference">GoogleDiscoveryEngineDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.contentConfigInput">content_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearchInput">create_advanced_site_search_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dataStoreIdInput">data_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.documentProcessingConfigInput">document_processing_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.industryVerticalInput">industry_vertical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.skipDefaultSchemaCreationInput">skip_default_schema_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.solutionTypesInput">solution_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.contentConfig">content_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dataStoreId">data_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.skipDefaultSchemaCreation">skip_default_schema_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `default_schema_id`<sup>Required</sup> <a name="default_schema_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.defaultSchemaId"></a>

```python
default_schema_id: str
```

- *Type:* str

---

##### `document_processing_config`<sup>Required</sup> <a name="document_processing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.documentProcessingConfig"></a>

```python
document_processing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineDataStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference">GoogleDiscoveryEngineDataStoreTimeoutsOutputReference</a>

---

##### `content_config_input`<sup>Optional</sup> <a name="content_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.contentConfigInput"></a>

```python
content_config_input: str
```

- *Type:* str

---

##### `create_advanced_site_search_input`<sup>Optional</sup> <a name="create_advanced_site_search_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearchInput"></a>

```python
create_advanced_site_search_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_store_id_input`<sup>Optional</sup> <a name="data_store_id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dataStoreIdInput"></a>

```python
data_store_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `document_processing_config_input`<sup>Optional</sup> <a name="document_processing_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.documentProcessingConfigInput"></a>

```python
document_processing_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `industry_vertical_input`<sup>Optional</sup> <a name="industry_vertical_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.industryVerticalInput"></a>

```python
industry_vertical_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `skip_default_schema_creation_input`<sup>Optional</sup> <a name="skip_default_schema_creation_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.skipDefaultSchemaCreationInput"></a>

```python
skip_default_schema_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `solution_types_input`<sup>Optional</sup> <a name="solution_types_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.solutionTypesInput"></a>

```python
solution_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDiscoveryEngineDataStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a>]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.contentConfig"></a>

```python
content_config: str
```

- *Type:* str

---

##### `create_advanced_site_search`<sup>Required</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearch"></a>

```python
create_advanced_site_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dataStoreId"></a>

```python
data_store_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `skip_default_schema_creation`<sup>Required</sup> <a name="skip_default_schema_creation" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.skipDefaultSchemaCreation"></a>

```python
skip_default_schema_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `solution_types`<sup>Required</sup> <a name="solution_types" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.solutionTypes"></a>

```python
solution_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineDataStoreConfig <a name="GoogleDiscoveryEngineDataStoreConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_config: str,
  data_store_id: str,
  display_name: str,
  industry_vertical: str,
  location: str,
  create_advanced_site_search: typing.Union[bool, IResolvable] = None,
  document_processing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfig = None,
  id: str = None,
  project: str = None,
  skip_default_schema_creation: typing.Union[bool, IResolvable] = None,
  solution_types: typing.List[str] = None,
  timeouts: GoogleDiscoveryEngineDataStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.contentConfig">content_config</a></code> | <code>str</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.dataStoreId">data_store_id</a></code> | <code>str</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.documentProcessingConfig">document_processing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | document_processing_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#id GoogleDiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#project GoogleDiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.skipDefaultSchemaCreation">skip_default_schema_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean flag indicating whether to skip the default schema creation for the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.contentConfig"></a>

```python
content_config: str
```

- *Type:* str

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#content_config GoogleDiscoveryEngineDataStore#content_config}

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.dataStoreId"></a>

```python
data_store_id: str
```

- *Type:* str

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#data_store_id GoogleDiscoveryEngineDataStore#data_store_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#display_name GoogleDiscoveryEngineDataStore#display_name}

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#industry_vertical GoogleDiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#location GoogleDiscoveryEngineDataStore#location}

---

##### `create_advanced_site_search`<sup>Optional</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch"></a>

```python
create_advanced_site_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#create_advanced_site_search GoogleDiscoveryEngineDataStore#create_advanced_site_search}

---

##### `document_processing_config`<sup>Optional</sup> <a name="document_processing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.documentProcessingConfig"></a>

```python
document_processing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a>

document_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#document_processing_config GoogleDiscoveryEngineDataStore#document_processing_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#id GoogleDiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#project GoogleDiscoveryEngineDataStore#project}.

---

##### `skip_default_schema_creation`<sup>Optional</sup> <a name="skip_default_schema_creation" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.skipDefaultSchemaCreation"></a>

```python
skip_default_schema_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean flag indicating whether to skip the default schema creation for the data store.

Only enable this flag if you are certain that the default
schema is incompatible with your use case.
If set to true, you must manually create a schema for the data store
before any documents can be ingested.
This flag cannot be specified if 'data_store.starting_schema' is
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#skip_default_schema_creation GoogleDiscoveryEngineDataStore#skip_default_schema_creation}

---

##### `solution_types`<sup>Optional</sup> <a name="solution_types" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.solutionTypes"></a>

```python
solution_types: typing.List[str]
```

- *Type:* typing.List[str]

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#solution_types GoogleDiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineDataStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#timeouts GoogleDiscoveryEngineDataStore#timeouts}

---

### GoogleDiscoveryEngineDataStoreDocumentProcessingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig(
  chunking_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig = None,
  default_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig = None,
  parsing_config_overrides: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig.property.chunkingConfig">chunking_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | chunking_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig.property.defaultParsingConfig">default_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | default_parsing_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig.property.parsingConfigOverrides">parsing_config_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]</code> | parsing_config_overrides block. |

---

##### `chunking_config`<sup>Optional</sup> <a name="chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig.property.chunkingConfig"></a>

```python
chunking_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#chunking_config GoogleDiscoveryEngineDataStore#chunking_config}

---

##### `default_parsing_config`<sup>Optional</sup> <a name="default_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig.property.defaultParsingConfig"></a>

```python
default_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

default_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#default_parsing_config GoogleDiscoveryEngineDataStore#default_parsing_config}

---

##### `parsing_config_overrides`<sup>Optional</sup> <a name="parsing_config_overrides" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig.property.parsingConfigOverrides"></a>

```python
parsing_config_overrides: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

parsing_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#parsing_config_overrides GoogleDiscoveryEngineDataStore#parsing_config_overrides}

---

### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig(
  layout_based_chunking_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.property.layoutBasedChunkingConfig">layout_based_chunking_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | layout_based_chunking_config block. |

---

##### `layout_based_chunking_config`<sup>Optional</sup> <a name="layout_based_chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.property.layoutBasedChunkingConfig"></a>

```python
layout_based_chunking_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

layout_based_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#layout_based_chunking_config GoogleDiscoveryEngineDataStore#layout_based_chunking_config}

---

### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig(
  chunk_size: typing.Union[int, float] = None,
  include_ancestor_headings: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.includeAncestorHeadings">include_ancestor_headings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss. |

---

##### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#chunk_size GoogleDiscoveryEngineDataStore#chunk_size}

---

##### `include_ancestor_headings`<sup>Optional</sup> <a name="include_ancestor_headings" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.includeAncestorHeadings"></a>

```python
include_ancestor_headings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss.

Default value: False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#include_ancestor_headings GoogleDiscoveryEngineDataStore#include_ancestor_headings}

---

### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig(
  digital_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig = None,
  layout_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig = None,
  ocr_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.digitalParsingConfig">digital_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | digital_parsing_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.layoutParsingConfig">layout_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | layout_parsing_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.ocrParsingConfig">ocr_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | ocr_parsing_config block. |

---

##### `digital_parsing_config`<sup>Optional</sup> <a name="digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.digitalParsingConfig"></a>

```python
digital_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#digital_parsing_config GoogleDiscoveryEngineDataStore#digital_parsing_config}

---

##### `layout_parsing_config`<sup>Optional</sup> <a name="layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.layoutParsingConfig"></a>

```python
layout_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#layout_parsing_config GoogleDiscoveryEngineDataStore#layout_parsing_config}

---

##### `ocr_parsing_config`<sup>Optional</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.ocrParsingConfig"></a>

```python
ocr_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#ocr_parsing_config GoogleDiscoveryEngineDataStore#ocr_parsing_config}

---

### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig()
```


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig()
```


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig(
  use_native_text: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.property.useNativeText">use_native_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, will use native text instead of OCR text on pages containing native text. |

---

##### `use_native_text`<sup>Optional</sup> <a name="use_native_text" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.property.useNativeText"></a>

```python
use_native_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#use_native_text GoogleDiscoveryEngineDataStore#use_native_text}

---

### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides(
  file_type: str,
  digital_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig = None,
  layout_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig = None,
  ocr_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.fileType">file_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#file_type GoogleDiscoveryEngineDataStore#file_type}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.digitalParsingConfig">digital_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | digital_parsing_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.layoutParsingConfig">layout_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | layout_parsing_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.ocrParsingConfig">ocr_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | ocr_parsing_config block. |

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#file_type GoogleDiscoveryEngineDataStore#file_type}.

---

##### `digital_parsing_config`<sup>Optional</sup> <a name="digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.digitalParsingConfig"></a>

```python
digital_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#digital_parsing_config GoogleDiscoveryEngineDataStore#digital_parsing_config}

---

##### `layout_parsing_config`<sup>Optional</sup> <a name="layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.layoutParsingConfig"></a>

```python
layout_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#layout_parsing_config GoogleDiscoveryEngineDataStore#layout_parsing_config}

---

##### `ocr_parsing_config`<sup>Optional</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.ocrParsingConfig"></a>

```python
ocr_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#ocr_parsing_config GoogleDiscoveryEngineDataStore#ocr_parsing_config}

---

### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig()
```


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig()
```


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig(
  use_native_text: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.property.useNativeText">use_native_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, will use native text instead of OCR text on pages containing native text. |

---

##### `use_native_text`<sup>Optional</sup> <a name="use_native_text" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.property.useNativeText"></a>

```python
use_native_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#use_native_text GoogleDiscoveryEngineDataStore#use_native_text}

---

### GoogleDiscoveryEngineDataStoreTimeouts <a name="GoogleDiscoveryEngineDataStoreTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#create GoogleDiscoveryEngineDataStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#delete GoogleDiscoveryEngineDataStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#update GoogleDiscoveryEngineDataStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#create GoogleDiscoveryEngineDataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#delete GoogleDiscoveryEngineDataStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#update GoogleDiscoveryEngineDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetChunkSize">reset_chunk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetIncludeAncestorHeadings">reset_include_ancestor_headings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_chunk_size` <a name="reset_chunk_size" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetChunkSize"></a>

```python
def reset_chunk_size() -> None
```

##### `reset_include_ancestor_headings` <a name="reset_include_ancestor_headings" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetIncludeAncestorHeadings"></a>

```python
def reset_include_ancestor_headings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSizeInput">chunk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadingsInput">include_ancestor_headings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings">include_ancestor_headings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunk_size_input`<sup>Optional</sup> <a name="chunk_size_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSizeInput"></a>

```python
chunk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_ancestor_headings_input`<sup>Optional</sup> <a name="include_ancestor_headings_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadingsInput"></a>

```python
include_ancestor_headings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chunk_size`<sup>Required</sup> <a name="chunk_size" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_ancestor_headings`<sup>Required</sup> <a name="include_ancestor_headings" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings"></a>

```python
include_ancestor_headings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig">put_layout_based_chunking_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resetLayoutBasedChunkingConfig">reset_layout_based_chunking_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layout_based_chunking_config` <a name="put_layout_based_chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig"></a>

```python
def put_layout_based_chunking_config(
  chunk_size: typing.Union[int, float] = None,
  include_ancestor_headings: typing.Union[bool, IResolvable] = None
) -> None
```

###### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig.parameter.chunkSize"></a>

- *Type:* typing.Union[int, float]

The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#chunk_size GoogleDiscoveryEngineDataStore#chunk_size}

---

###### `include_ancestor_headings`<sup>Optional</sup> <a name="include_ancestor_headings" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig.parameter.includeAncestorHeadings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss.

Default value: False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#include_ancestor_headings GoogleDiscoveryEngineDataStore#include_ancestor_headings}

---

##### `reset_layout_based_chunking_config` <a name="reset_layout_based_chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resetLayoutBasedChunkingConfig"></a>

```python
def reset_layout_based_chunking_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig">layout_based_chunking_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfigInput">layout_based_chunking_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layout_based_chunking_config`<sup>Required</sup> <a name="layout_based_chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig"></a>

```python
layout_based_chunking_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference</a>

---

##### `layout_based_chunking_config_input`<sup>Optional</sup> <a name="layout_based_chunking_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfigInput"></a>

```python
layout_based_chunking_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resetUseNativeText">reset_use_native_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_native_text` <a name="reset_use_native_text" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resetUseNativeText"></a>

```python
def reset_use_native_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeTextInput">use_native_text_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText">use_native_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_native_text_input`<sup>Optional</sup> <a name="use_native_text_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeTextInput"></a>

```python
use_native_text_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_native_text`<sup>Required</sup> <a name="use_native_text" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText"></a>

```python
use_native_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig">put_digital_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig">put_layout_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig">put_ocr_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetDigitalParsingConfig">reset_digital_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetLayoutParsingConfig">reset_layout_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetOcrParsingConfig">reset_ocr_parsing_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_digital_parsing_config` <a name="put_digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig"></a>

```python
def put_digital_parsing_config() -> None
```

##### `put_layout_parsing_config` <a name="put_layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig"></a>

```python
def put_layout_parsing_config() -> None
```

##### `put_ocr_parsing_config` <a name="put_ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig"></a>

```python
def put_ocr_parsing_config(
  use_native_text: typing.Union[bool, IResolvable] = None
) -> None
```

###### `use_native_text`<sup>Optional</sup> <a name="use_native_text" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig.parameter.useNativeText"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#use_native_text GoogleDiscoveryEngineDataStore#use_native_text}

---

##### `reset_digital_parsing_config` <a name="reset_digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetDigitalParsingConfig"></a>

```python
def reset_digital_parsing_config() -> None
```

##### `reset_layout_parsing_config` <a name="reset_layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetLayoutParsingConfig"></a>

```python
def reset_layout_parsing_config() -> None
```

##### `reset_ocr_parsing_config` <a name="reset_ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetOcrParsingConfig"></a>

```python
def reset_ocr_parsing_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig">digital_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig">layout_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig">ocr_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfigInput">digital_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfigInput">layout_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfigInput">ocr_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digital_parsing_config`<sup>Required</sup> <a name="digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig"></a>

```python
digital_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference</a>

---

##### `layout_parsing_config`<sup>Required</sup> <a name="layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig"></a>

```python
layout_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference</a>

---

##### `ocr_parsing_config`<sup>Required</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig"></a>

```python
ocr_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference</a>

---

##### `digital_parsing_config_input`<sup>Optional</sup> <a name="digital_parsing_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfigInput"></a>

```python
digital_parsing_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---

##### `layout_parsing_config_input`<sup>Optional</sup> <a name="layout_parsing_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfigInput"></a>

```python
layout_parsing_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---

##### `ocr_parsing_config_input`<sup>Optional</sup> <a name="ocr_parsing_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfigInput"></a>

```python
ocr_parsing_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig">put_chunking_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig">put_default_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides">put_parsing_config_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetChunkingConfig">reset_chunking_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetDefaultParsingConfig">reset_default_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetParsingConfigOverrides">reset_parsing_config_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chunking_config` <a name="put_chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig"></a>

```python
def put_chunking_config(
  layout_based_chunking_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig = None
) -> None
```

###### `layout_based_chunking_config`<sup>Optional</sup> <a name="layout_based_chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig.parameter.layoutBasedChunkingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

layout_based_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#layout_based_chunking_config GoogleDiscoveryEngineDataStore#layout_based_chunking_config}

---

##### `put_default_parsing_config` <a name="put_default_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig"></a>

```python
def put_default_parsing_config(
  digital_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig = None,
  layout_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig = None,
  ocr_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig = None
) -> None
```

###### `digital_parsing_config`<sup>Optional</sup> <a name="digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig.parameter.digitalParsingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#digital_parsing_config GoogleDiscoveryEngineDataStore#digital_parsing_config}

---

###### `layout_parsing_config`<sup>Optional</sup> <a name="layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig.parameter.layoutParsingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#layout_parsing_config GoogleDiscoveryEngineDataStore#layout_parsing_config}

---

###### `ocr_parsing_config`<sup>Optional</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig.parameter.ocrParsingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#ocr_parsing_config GoogleDiscoveryEngineDataStore#ocr_parsing_config}

---

##### `put_parsing_config_overrides` <a name="put_parsing_config_overrides" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides"></a>

```python
def put_parsing_config_overrides(
  value: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

---

##### `reset_chunking_config` <a name="reset_chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetChunkingConfig"></a>

```python
def reset_chunking_config() -> None
```

##### `reset_default_parsing_config` <a name="reset_default_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetDefaultParsingConfig"></a>

```python
def reset_default_parsing_config() -> None
```

##### `reset_parsing_config_overrides` <a name="reset_parsing_config_overrides" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetParsingConfigOverrides"></a>

```python
def reset_parsing_config_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig">chunking_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig">default_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides">parsing_config_overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfigInput">chunking_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfigInput">default_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverridesInput">parsing_config_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunking_config`<sup>Required</sup> <a name="chunking_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig"></a>

```python
chunking_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference</a>

---

##### `default_parsing_config`<sup>Required</sup> <a name="default_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig"></a>

```python
default_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parsing_config_overrides`<sup>Required</sup> <a name="parsing_config_overrides" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides"></a>

```python
parsing_config_overrides: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a>

---

##### `chunking_config_input`<sup>Optional</sup> <a name="chunking_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfigInput"></a>

```python
chunking_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---

##### `default_parsing_config_input`<sup>Optional</sup> <a name="default_parsing_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfigInput"></a>

```python
default_parsing_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---

##### `parsing_config_overrides_input`<sup>Optional</sup> <a name="parsing_config_overrides_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverridesInput"></a>

```python
parsing_config_overrides_input: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resetUseNativeText">reset_use_native_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_native_text` <a name="reset_use_native_text" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resetUseNativeText"></a>

```python
def reset_use_native_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeTextInput">use_native_text_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText">use_native_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_native_text_input`<sup>Optional</sup> <a name="use_native_text_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeTextInput"></a>

```python
use_native_text_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_native_text`<sup>Required</sup> <a name="use_native_text" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText"></a>

```python
use_native_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---


### GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference <a name="GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig">put_digital_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig">put_layout_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig">put_ocr_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetDigitalParsingConfig">reset_digital_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetLayoutParsingConfig">reset_layout_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetOcrParsingConfig">reset_ocr_parsing_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_digital_parsing_config` <a name="put_digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig"></a>

```python
def put_digital_parsing_config() -> None
```

##### `put_layout_parsing_config` <a name="put_layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig"></a>

```python
def put_layout_parsing_config() -> None
```

##### `put_ocr_parsing_config` <a name="put_ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig"></a>

```python
def put_ocr_parsing_config(
  use_native_text: typing.Union[bool, IResolvable] = None
) -> None
```

###### `use_native_text`<sup>Optional</sup> <a name="use_native_text" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig.parameter.useNativeText"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_data_store#use_native_text GoogleDiscoveryEngineDataStore#use_native_text}

---

##### `reset_digital_parsing_config` <a name="reset_digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetDigitalParsingConfig"></a>

```python
def reset_digital_parsing_config() -> None
```

##### `reset_layout_parsing_config` <a name="reset_layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetLayoutParsingConfig"></a>

```python
def reset_layout_parsing_config() -> None
```

##### `reset_ocr_parsing_config` <a name="reset_ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetOcrParsingConfig"></a>

```python
def reset_ocr_parsing_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig">digital_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig">layout_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig">ocr_parsing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfigInput">digital_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileTypeInput">file_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfigInput">layout_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfigInput">ocr_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType">file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digital_parsing_config`<sup>Required</sup> <a name="digital_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig"></a>

```python
digital_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference</a>

---

##### `layout_parsing_config`<sup>Required</sup> <a name="layout_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig"></a>

```python
layout_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference</a>

---

##### `ocr_parsing_config`<sup>Required</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig"></a>

```python
ocr_parsing_config: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference</a>

---

##### `digital_parsing_config_input`<sup>Optional</sup> <a name="digital_parsing_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfigInput"></a>

```python
digital_parsing_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---

##### `file_type_input`<sup>Optional</sup> <a name="file_type_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileTypeInput"></a>

```python
file_type_input: str
```

- *Type:* str

---

##### `layout_parsing_config_input`<sup>Optional</sup> <a name="layout_parsing_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfigInput"></a>

```python
layout_parsing_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---

##### `ocr_parsing_config_input`<sup>Optional</sup> <a name="ocr_parsing_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfigInput"></a>

```python
ocr_parsing_config_input: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]

---


### GoogleDiscoveryEngineDataStoreTimeoutsOutputReference <a name="GoogleDiscoveryEngineDataStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_data_store

googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDiscoveryEngineDataStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a>]

---



