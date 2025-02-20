# `googleDataplexDatascan` Submodule <a name="`googleDataplexDatascan` Submodule" id="@cdktf/provider-google-beta.googleDataplexDatascan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDatascan <a name="GoogleDataplexDatascan" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan google_dataplex_datascan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data: GoogleDataplexDatascanData,
  data_scan_id: str,
  execution_spec: GoogleDataplexDatascanExecutionSpec,
  location: str,
  data_profile_spec: GoogleDataplexDatascanDataProfileSpec = None,
  data_quality_spec: GoogleDataplexDatascanDataQualitySpec = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDataplexDatascanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.data">data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | data block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.dataScanId">data_scan_id</a></code> | <code>str</code> | DataScan identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the data scan should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.dataProfileSpec">data_profile_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | data_profile_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.dataQualitySpec">data_quality_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | data_quality_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the scan. A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.data"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#data GoogleDataplexDatascan#data}

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.dataScanId"></a>

- *Type:* str

DataScan identifier.

Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#data_scan_id GoogleDataplexDatascan#data_scan_id}

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.executionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#execution_spec GoogleDataplexDatascan#execution_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.location"></a>

- *Type:* str

The location where the data scan should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#location GoogleDataplexDatascan#location}

---

##### `data_profile_spec`<sup>Optional</sup> <a name="data_profile_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.dataProfileSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

data_profile_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#data_profile_spec GoogleDataplexDatascan#data_profile_spec}

---

##### `data_quality_spec`<sup>Optional</sup> <a name="data_quality_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.dataQualitySpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

data_quality_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#data_quality_spec GoogleDataplexDatascan#data_quality_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.description"></a>

- *Type:* str

Description of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#display_name GoogleDataplexDatascan#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the scan. A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#labels GoogleDataplexDatascan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#timeouts GoogleDataplexDatascan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData">put_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec">put_data_profile_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec">put_data_quality_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec">put_execution_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataProfileSpec">reset_data_profile_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataQualitySpec">reset_data_quality_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data` <a name="put_data" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData"></a>

```python
def put_data(
  entity: str = None,
  resource: str = None
) -> None
```

###### `entity`<sup>Optional</sup> <a name="entity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData.parameter.entity"></a>

- *Type:* str

The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#entity GoogleDataplexDatascan#entity}

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData.parameter.resource"></a>

- *Type:* str

The service-qualified full resource name of the cloud resource for a DataScan job to scan against.

The field could be:
(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#resource GoogleDataplexDatascan#resource}

---

##### `put_data_profile_spec` <a name="put_data_profile_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec"></a>

```python
def put_data_profile_spec(
  exclude_fields: GoogleDataplexDatascanDataProfileSpecExcludeFields = None,
  include_fields: GoogleDataplexDatascanDataProfileSpecIncludeFields = None,
  post_scan_actions: GoogleDataplexDatascanDataProfileSpecPostScanActions = None,
  row_filter: str = None,
  sampling_percent: typing.Union[int, float] = None
) -> None
```

###### `exclude_fields`<sup>Optional</sup> <a name="exclude_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec.parameter.excludeFields"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

exclude_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#exclude_fields GoogleDataplexDatascan#exclude_fields}

---

###### `include_fields`<sup>Optional</sup> <a name="include_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec.parameter.includeFields"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

include_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#include_fields GoogleDataplexDatascan#include_fields}

---

###### `post_scan_actions`<sup>Optional</sup> <a name="post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec.parameter.postScanActions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}

---

###### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec.parameter.rowFilter"></a>

- *Type:* str

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}

---

###### `sampling_percent`<sup>Optional</sup> <a name="sampling_percent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec.parameter.samplingPercent"></a>

- *Type:* typing.Union[int, float]

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}

---

##### `put_data_quality_spec` <a name="put_data_quality_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec"></a>

```python
def put_data_quality_spec(
  post_scan_actions: GoogleDataplexDatascanDataQualitySpecPostScanActions = None,
  row_filter: str = None,
  rules: typing.Union[IResolvable, typing.List[GoogleDataplexDatascanDataQualitySpecRules]] = None,
  sampling_percent: typing.Union[int, float] = None
) -> None
```

###### `post_scan_actions`<sup>Optional</sup> <a name="post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec.parameter.postScanActions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}

---

###### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec.parameter.rowFilter"></a>

- *Type:* str

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#rules GoogleDataplexDatascan#rules}

---

###### `sampling_percent`<sup>Optional</sup> <a name="sampling_percent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec.parameter.samplingPercent"></a>

- *Type:* typing.Union[int, float]

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}

---

##### `put_execution_spec` <a name="put_execution_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec"></a>

```python
def put_execution_spec(
  trigger: GoogleDataplexDatascanExecutionSpecTrigger,
  field: str = None
) -> None
```

###### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec.parameter.trigger"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#trigger GoogleDataplexDatascan#trigger}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec.parameter.field"></a>

- *Type:* str

The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.

If not specified, a data scan will run for all data in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#field GoogleDataplexDatascan#field}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#create GoogleDataplexDatascan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#delete GoogleDataplexDatascan#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#update GoogleDataplexDatascan#update}.

---

##### `reset_data_profile_spec` <a name="reset_data_profile_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataProfileSpec"></a>

```python
def reset_data_profile_spec() -> None
```

##### `reset_data_quality_spec` <a name="reset_data_quality_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataQualitySpec"></a>

```python
def reset_data_quality_spec() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataplexDatascan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataplexDatascan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataplexDatascan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataplexDatascan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDatascan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.data">data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference">GoogleDataplexDatascanDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpec">data_profile_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference">GoogleDataplexDatascanDataProfileSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpec">data_quality_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference">GoogleDataplexDatascanDataQualitySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference">GoogleDataplexDatascanExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionStatus">execution_status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList">GoogleDataplexDatascanExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference">GoogleDataplexDatascanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataInput">data_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpecInput">data_profile_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpecInput">data_quality_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanIdInput">data_scan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpecInput">execution_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanId">data_scan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.data"></a>

```python
data: GoogleDataplexDatascanDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference">GoogleDataplexDatascanDataOutputReference</a>

---

##### `data_profile_spec`<sup>Required</sup> <a name="data_profile_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpec"></a>

```python
data_profile_spec: GoogleDataplexDatascanDataProfileSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference">GoogleDataplexDatascanDataProfileSpecOutputReference</a>

---

##### `data_quality_spec`<sup>Required</sup> <a name="data_quality_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpec"></a>

```python
data_quality_spec: GoogleDataplexDatascanDataQualitySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference">GoogleDataplexDatascanDataQualitySpecOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpec"></a>

```python
execution_spec: GoogleDataplexDatascanExecutionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference">GoogleDataplexDatascanExecutionSpecOutputReference</a>

---

##### `execution_status`<sup>Required</sup> <a name="execution_status" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionStatus"></a>

```python
execution_status: GoogleDataplexDatascanExecutionStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList">GoogleDataplexDatascanExecutionStatusList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeouts"></a>

```python
timeouts: GoogleDataplexDatascanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference">GoogleDataplexDatascanTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataInput"></a>

```python
data_input: GoogleDataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

---

##### `data_profile_spec_input`<sup>Optional</sup> <a name="data_profile_spec_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpecInput"></a>

```python
data_profile_spec_input: GoogleDataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

---

##### `data_quality_spec_input`<sup>Optional</sup> <a name="data_quality_spec_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpecInput"></a>

```python
data_quality_spec_input: GoogleDataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

---

##### `data_scan_id_input`<sup>Optional</sup> <a name="data_scan_id_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanIdInput"></a>

```python
data_scan_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_spec_input`<sup>Optional</sup> <a name="execution_spec_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpecInput"></a>

```python
execution_spec_input: GoogleDataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataplexDatascanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>]

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanId"></a>

```python
data_scan_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDatascanConfig <a name="GoogleDataplexDatascanConfig" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data: GoogleDataplexDatascanData,
  data_scan_id: str,
  execution_spec: GoogleDataplexDatascanExecutionSpec,
  location: str,
  data_profile_spec: GoogleDataplexDatascanDataProfileSpec = None,
  data_quality_spec: GoogleDataplexDatascanDataQualitySpec = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDataplexDatascanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | data block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataScanId">data_scan_id</a></code> | <code>str</code> | DataScan identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.location">location</a></code> | <code>str</code> | The location where the data scan should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataProfileSpec">data_profile_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | data_profile_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataQualitySpec">data_quality_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | data_quality_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.description">description</a></code> | <code>str</code> | Description of the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the scan. A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.data"></a>

```python
data: GoogleDataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#data GoogleDataplexDatascan#data}

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataScanId"></a>

```python
data_scan_id: str
```

- *Type:* str

DataScan identifier.

Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#data_scan_id GoogleDataplexDatascan#data_scan_id}

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.executionSpec"></a>

```python
execution_spec: GoogleDataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#execution_spec GoogleDataplexDatascan#execution_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the data scan should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#location GoogleDataplexDatascan#location}

---

##### `data_profile_spec`<sup>Optional</sup> <a name="data_profile_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataProfileSpec"></a>

```python
data_profile_spec: GoogleDataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

data_profile_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#data_profile_spec GoogleDataplexDatascan#data_profile_spec}

---

##### `data_quality_spec`<sup>Optional</sup> <a name="data_quality_spec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataQualitySpec"></a>

```python
data_quality_spec: GoogleDataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

data_quality_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#data_quality_spec GoogleDataplexDatascan#data_quality_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#display_name GoogleDataplexDatascan#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the scan. A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#labels GoogleDataplexDatascan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.timeouts"></a>

```python
timeouts: GoogleDataplexDatascanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#timeouts GoogleDataplexDatascan#timeouts}

---

### GoogleDataplexDatascanData <a name="GoogleDataplexDatascanData" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanData(
  entity: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.entity">entity</a></code> | <code>str</code> | The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.resource">resource</a></code> | <code>str</code> | The service-qualified full resource name of the cloud resource for a DataScan job to scan against. |

---

##### `entity`<sup>Optional</sup> <a name="entity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.entity"></a>

```python
entity: str
```

- *Type:* str

The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#entity GoogleDataplexDatascan#entity}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.resource"></a>

```python
resource: str
```

- *Type:* str

The service-qualified full resource name of the cloud resource for a DataScan job to scan against.

The field could be:
(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#resource GoogleDataplexDatascan#resource}

---

### GoogleDataplexDatascanDataProfileSpec <a name="GoogleDataplexDatascanDataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec(
  exclude_fields: GoogleDataplexDatascanDataProfileSpecExcludeFields = None,
  include_fields: GoogleDataplexDatascanDataProfileSpecIncludeFields = None,
  post_scan_actions: GoogleDataplexDatascanDataProfileSpecPostScanActions = None,
  row_filter: str = None,
  sampling_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.excludeFields">exclude_fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | exclude_fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.includeFields">include_fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | include_fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.postScanActions">post_scan_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.rowFilter">row_filter</a></code> | <code>str</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.samplingPercent">sampling_percent</a></code> | <code>typing.Union[int, float]</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `exclude_fields`<sup>Optional</sup> <a name="exclude_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.excludeFields"></a>

```python
exclude_fields: GoogleDataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

exclude_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#exclude_fields GoogleDataplexDatascan#exclude_fields}

---

##### `include_fields`<sup>Optional</sup> <a name="include_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.includeFields"></a>

```python
include_fields: GoogleDataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

include_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#include_fields GoogleDataplexDatascan#include_fields}

---

##### `post_scan_actions`<sup>Optional</sup> <a name="post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.postScanActions"></a>

```python
post_scan_actions: GoogleDataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}

---

##### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.rowFilter"></a>

```python
row_filter: str
```

- *Type:* str

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}

---

##### `sampling_percent`<sup>Optional</sup> <a name="sampling_percent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.samplingPercent"></a>

```python
sampling_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}

---

### GoogleDataplexDatascanDataProfileSpecExcludeFields <a name="GoogleDataplexDatascanDataProfileSpecExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields(
  field_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}

---

### GoogleDataplexDatascanDataProfileSpecIncludeFields <a name="GoogleDataplexDatascanDataProfileSpecIncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields(
  field_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}

---

### GoogleDataplexDatascanDataProfileSpecPostScanActions <a name="GoogleDataplexDatascanDataProfileSpecPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions(
  bigquery_export: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport">bigquery_export</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |

---

##### `bigquery_export`<sup>Optional</sup> <a name="bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport"></a>

```python
bigquery_export: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}

---

### GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport(
  results_table: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable">results_table</a></code> | <code>str</code> | The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `results_table`<sup>Optional</sup> <a name="results_table" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```python
results_table: str
```

- *Type:* str

The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}

---

### GoogleDataplexDatascanDataQualitySpec <a name="GoogleDataplexDatascanDataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec(
  post_scan_actions: GoogleDataplexDatascanDataQualitySpecPostScanActions = None,
  row_filter: str = None,
  rules: typing.Union[IResolvable, typing.List[GoogleDataplexDatascanDataQualitySpecRules]] = None,
  sampling_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.postScanActions">post_scan_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rowFilter">row_filter</a></code> | <code>str</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.samplingPercent">sampling_percent</a></code> | <code>typing.Union[int, float]</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `post_scan_actions`<sup>Optional</sup> <a name="post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.postScanActions"></a>

```python
post_scan_actions: GoogleDataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}

---

##### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rowFilter"></a>

```python
row_filter: str
```

- *Type:* str

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleDataplexDatascanDataQualitySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#rules GoogleDataplexDatascan#rules}

---

##### `sampling_percent`<sup>Optional</sup> <a name="sampling_percent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.samplingPercent"></a>

```python
sampling_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}

---

### GoogleDataplexDatascanDataQualitySpecPostScanActions <a name="GoogleDataplexDatascanDataQualitySpecPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions(
  bigquery_export: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport">bigquery_export</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |

---

##### `bigquery_export`<sup>Optional</sup> <a name="bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport"></a>

```python
bigquery_export: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}

---

### GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport(
  results_table: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable">results_table</a></code> | <code>str</code> | The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `results_table`<sup>Optional</sup> <a name="results_table" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```python
results_table: str
```

- *Type:* str

The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}

---

### GoogleDataplexDatascanDataQualitySpecRules <a name="GoogleDataplexDatascanDataQualitySpecRules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules(
  dimension: str,
  column: str = None,
  description: str = None,
  ignore_null: typing.Union[bool, IResolvable] = None,
  name: str = None,
  non_null_expectation: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation = None,
  range_expectation: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation = None,
  regex_expectation: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation = None,
  row_condition_expectation: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation = None,
  set_expectation: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation = None,
  sql_assertion: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion = None,
  statistic_range_expectation: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation = None,
  table_condition_expectation: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation = None,
  threshold: typing.Union[int, float] = None,
  uniqueness_expectation: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.dimension">dimension</a></code> | <code>str</code> | The dimension a rule belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.column">column</a></code> | <code>str</code> | The unnested column which this rule is evaluated against. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.description">description</a></code> | <code>str</code> | Description of the rule. The maximum length is 1,024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.ignoreNull">ignore_null</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Rows with null values will automatically fail a rule, unless ignoreNull is true. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.name">name</a></code> | <code>str</code> | A mutable name for the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.nonNullExpectation">non_null_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | non_null_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rangeExpectation">range_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | range_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.regexExpectation">regex_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | regex_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rowConditionExpectation">row_condition_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | row_condition_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.setExpectation">set_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | set_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.sqlAssertion">sql_assertion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | sql_assertion block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation">statistic_range_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | statistic_range_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.tableConditionExpectation">table_condition_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | table_condition_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0). |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.uniquenessExpectation">uniqueness_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | uniqueness_expectation block. |

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

The dimension a rule belongs to.

Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#dimension GoogleDataplexDatascan#dimension}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.column"></a>

```python
column: str
```

- *Type:* str

The unnested column which this rule is evaluated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#column GoogleDataplexDatascan#column}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the rule. The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}

---

##### `ignore_null`<sup>Optional</sup> <a name="ignore_null" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.ignoreNull"></a>

```python
ignore_null: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Rows with null values will automatically fail a rule, unless ignoreNull is true.

In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#ignore_null GoogleDataplexDatascan#ignore_null}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.name"></a>

```python
name: str
```

- *Type:* str

A mutable name for the rule.

The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#name GoogleDataplexDatascan#name}

---

##### `non_null_expectation`<sup>Optional</sup> <a name="non_null_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.nonNullExpectation"></a>

```python
non_null_expectation: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

non_null_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#non_null_expectation GoogleDataplexDatascan#non_null_expectation}

---

##### `range_expectation`<sup>Optional</sup> <a name="range_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rangeExpectation"></a>

```python
range_expectation: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#range_expectation GoogleDataplexDatascan#range_expectation}

---

##### `regex_expectation`<sup>Optional</sup> <a name="regex_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.regexExpectation"></a>

```python
regex_expectation: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

regex_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#regex_expectation GoogleDataplexDatascan#regex_expectation}

---

##### `row_condition_expectation`<sup>Optional</sup> <a name="row_condition_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rowConditionExpectation"></a>

```python
row_condition_expectation: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

row_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#row_condition_expectation GoogleDataplexDatascan#row_condition_expectation}

---

##### `set_expectation`<sup>Optional</sup> <a name="set_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.setExpectation"></a>

```python
set_expectation: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

set_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#set_expectation GoogleDataplexDatascan#set_expectation}

---

##### `sql_assertion`<sup>Optional</sup> <a name="sql_assertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.sqlAssertion"></a>

```python
sql_assertion: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

sql_assertion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sql_assertion GoogleDataplexDatascan#sql_assertion}

---

##### `statistic_range_expectation`<sup>Optional</sup> <a name="statistic_range_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation"></a>

```python
statistic_range_expectation: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

statistic_range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#statistic_range_expectation GoogleDataplexDatascan#statistic_range_expectation}

---

##### `table_condition_expectation`<sup>Optional</sup> <a name="table_condition_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.tableConditionExpectation"></a>

```python
table_condition_expectation: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

table_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#table_condition_expectation GoogleDataplexDatascan#table_condition_expectation}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#threshold GoogleDataplexDatascan#threshold}

---

##### `uniqueness_expectation`<sup>Optional</sup> <a name="uniqueness_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.uniquenessExpectation"></a>

```python
uniqueness_expectation: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

uniqueness_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#uniqueness_expectation GoogleDataplexDatascan#uniqueness_expectation}

---

### GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation()
```


### GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation(
  max_value: str = None,
  min_value: str = None,
  strict_max_enabled: typing.Union[bool, IResolvable] = None,
  strict_min_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue">max_value</a></code> | <code>str</code> | The maximum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue">min_value</a></code> | <code>str</code> | The minimum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled">strict_max_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled">strict_min_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

The maximum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

The minimum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}

---

##### `strict_max_enabled`<sup>Optional</sup> <a name="strict_max_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled"></a>

```python
strict_max_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}

---

##### `strict_min_enabled`<sup>Optional</sup> <a name="strict_min_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled"></a>

```python
strict_min_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}

---

### GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation(
  regex: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex">regex</a></code> | <code>str</code> | A regular expression the column value is expected to match. |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex"></a>

```python
regex: str
```

- *Type:* str

A regular expression the column value is expected to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#regex GoogleDataplexDatascan#regex}

---

### GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation(
  sql_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression">sql_expression</a></code> | <code>str</code> | The SQL expression. |

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}

---

### GoogleDataplexDatascanDataQualitySpecRulesSetExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesSetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.property.values">values</a></code> | <code>typing.List[str]</code> | Expected values for the column value. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Expected values for the column value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#values GoogleDataplexDatascan#values}

---

### GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion <a name="GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion(
  sql_statement: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement">sql_statement</a></code> | <code>str</code> | The SQL statement. |

---

##### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement"></a>

```python
sql_statement: str
```

- *Type:* str

The SQL statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sql_statement GoogleDataplexDatascan#sql_statement}

---

### GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation(
  statistic: str,
  max_value: str = None,
  min_value: str = None,
  strict_max_enabled: typing.Union[bool, IResolvable] = None,
  strict_min_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic">statistic</a></code> | <code>str</code> | column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue">max_value</a></code> | <code>str</code> | The maximum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue">min_value</a></code> | <code>str</code> | The minimum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled">strict_max_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled">strict_min_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#statistic GoogleDataplexDatascan#statistic}

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

The maximum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

The minimum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}

---

##### `strict_max_enabled`<sup>Optional</sup> <a name="strict_max_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled"></a>

```python
strict_max_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}

---

##### `strict_min_enabled`<sup>Optional</sup> <a name="strict_min_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled"></a>

```python
strict_min_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}

---

### GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation(
  sql_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression">sql_expression</a></code> | <code>str</code> | The SQL expression. |

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}

---

### GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation()
```


### GoogleDataplexDatascanExecutionSpec <a name="GoogleDataplexDatascanExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec(
  trigger: GoogleDataplexDatascanExecutionSpecTrigger,
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.field">field</a></code> | <code>str</code> | The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. |

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.trigger"></a>

```python
trigger: GoogleDataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#trigger GoogleDataplexDatascan#trigger}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.field"></a>

```python
field: str
```

- *Type:* str

The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.

If not specified, a data scan will run for all data in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#field GoogleDataplexDatascan#field}

---

### GoogleDataplexDatascanExecutionSpecTrigger <a name="GoogleDataplexDatascanExecutionSpecTrigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger(
  on_demand: GoogleDataplexDatascanExecutionSpecTriggerOnDemand = None,
  schedule: GoogleDataplexDatascanExecutionSpecTriggerSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.onDemand">on_demand</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | on_demand block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | schedule block. |

---

##### `on_demand`<sup>Optional</sup> <a name="on_demand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.onDemand"></a>

```python
on_demand: GoogleDataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

on_demand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#on_demand GoogleDataplexDatascan#on_demand}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.schedule"></a>

```python
schedule: GoogleDataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#schedule GoogleDataplexDatascan#schedule}

---

### GoogleDataplexDatascanExecutionSpecTriggerOnDemand <a name="GoogleDataplexDatascanExecutionSpecTriggerOnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand()
```


### GoogleDataplexDatascanExecutionSpecTriggerSchedule <a name="GoogleDataplexDatascanExecutionSpecTriggerSchedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule(
  cron: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.property.cron">cron</a></code> | <code>str</code> | Cron schedule for running scans periodically. This field is required for Schedule scans. |

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.property.cron"></a>

```python
cron: str
```

- *Type:* str

Cron schedule for running scans periodically. This field is required for Schedule scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#cron GoogleDataplexDatascan#cron}

---

### GoogleDataplexDatascanExecutionStatus <a name="GoogleDataplexDatascanExecutionStatus" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus()
```


### GoogleDataplexDatascanTimeouts <a name="GoogleDataplexDatascanTimeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#create GoogleDataplexDatascan#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#delete GoogleDataplexDatascan#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#update GoogleDataplexDatascan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#create GoogleDataplexDatascan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#delete GoogleDataplexDatascan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#update GoogleDataplexDatascan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDatascanDataOutputReference <a name="GoogleDataplexDatascanDataOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetEntity">reset_entity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity` <a name="reset_entity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetEntity"></a>

```python
def reset_entity() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entityInput">entity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entity">entity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_input`<sup>Optional</sup> <a name="entity_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entityInput"></a>

```python
entity_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entity"></a>

```python
entity: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

---


### GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames">reset_field_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_names` <a name="reset_field_names" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames"></a>

```python
def reset_field_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput">field_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_names_input`<sup>Optional</sup> <a name="field_names_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput"></a>

```python
field_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_names`<sup>Required</sup> <a name="field_names" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

---


### GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames">reset_field_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_names` <a name="reset_field_names" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames"></a>

```python
def reset_field_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput">field_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_names_input`<sup>Optional</sup> <a name="field_names_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput"></a>

```python
field_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_names`<sup>Required</sup> <a name="field_names" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

---


### GoogleDataplexDatascanDataProfileSpecOutputReference <a name="GoogleDataplexDatascanDataProfileSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields">put_exclude_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields">put_include_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions">put_post_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetExcludeFields">reset_exclude_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetIncludeFields">reset_include_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetPostScanActions">reset_post_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetRowFilter">reset_row_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent">reset_sampling_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclude_fields` <a name="put_exclude_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields"></a>

```python
def put_exclude_fields(
  field_names: typing.List[str] = None
) -> None
```

###### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields.parameter.fieldNames"></a>

- *Type:* typing.List[str]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}

---

##### `put_include_fields` <a name="put_include_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields"></a>

```python
def put_include_fields(
  field_names: typing.List[str] = None
) -> None
```

###### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields.parameter.fieldNames"></a>

- *Type:* typing.List[str]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}

---

##### `put_post_scan_actions` <a name="put_post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions"></a>

```python
def put_post_scan_actions(
  bigquery_export: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport = None
) -> None
```

###### `bigquery_export`<sup>Optional</sup> <a name="bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions.parameter.bigqueryExport"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}

---

##### `reset_exclude_fields` <a name="reset_exclude_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetExcludeFields"></a>

```python
def reset_exclude_fields() -> None
```

##### `reset_include_fields` <a name="reset_include_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetIncludeFields"></a>

```python
def reset_include_fields() -> None
```

##### `reset_post_scan_actions` <a name="reset_post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetPostScanActions"></a>

```python
def reset_post_scan_actions() -> None
```

##### `reset_row_filter` <a name="reset_row_filter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetRowFilter"></a>

```python
def reset_row_filter() -> None
```

##### `reset_sampling_percent` <a name="reset_sampling_percent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent"></a>

```python
def reset_sampling_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFields">exclude_fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFields">include_fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActions">post_scan_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput">exclude_fields_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput">include_fields_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput">post_scan_actions_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput">row_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput">sampling_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilter">row_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercent">sampling_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_fields`<sup>Required</sup> <a name="exclude_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFields"></a>

```python
exclude_fields: GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a>

---

##### `include_fields`<sup>Required</sup> <a name="include_fields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFields"></a>

```python
include_fields: GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a>

---

##### `post_scan_actions`<sup>Required</sup> <a name="post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActions"></a>

```python
post_scan_actions: GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference</a>

---

##### `exclude_fields_input`<sup>Optional</sup> <a name="exclude_fields_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput"></a>

```python
exclude_fields_input: GoogleDataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

---

##### `include_fields_input`<sup>Optional</sup> <a name="include_fields_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput"></a>

```python
include_fields_input: GoogleDataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

---

##### `post_scan_actions_input`<sup>Optional</sup> <a name="post_scan_actions_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput"></a>

```python
post_scan_actions_input: GoogleDataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

---

##### `row_filter_input`<sup>Optional</sup> <a name="row_filter_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput"></a>

```python
row_filter_input: str
```

- *Type:* str

---

##### `sampling_percent_input`<sup>Optional</sup> <a name="sampling_percent_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput"></a>

```python
sampling_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `row_filter`<sup>Required</sup> <a name="row_filter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilter"></a>

```python
row_filter: str
```

- *Type:* str

---

##### `sampling_percent`<sup>Required</sup> <a name="sampling_percent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercent"></a>

```python
sampling_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

---


### GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">reset_results_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_results_table` <a name="reset_results_table" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```python
def reset_results_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">results_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">results_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `results_table_input`<sup>Optional</sup> <a name="results_table_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```python
results_table_input: str
```

- *Type:* str

---

##### `results_table`<sup>Required</sup> <a name="results_table" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```python
results_table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---


### GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport">put_bigquery_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport">reset_bigquery_export</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_export` <a name="put_bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport"></a>

```python
def put_bigquery_export(
  results_table: str = None
) -> None
```

###### `results_table`<sup>Optional</sup> <a name="results_table" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport.parameter.resultsTable"></a>

- *Type:* str

The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}

---

##### `reset_bigquery_export` <a name="reset_bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```python
def reset_bigquery_export() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport">bigquery_export</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput">bigquery_export_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_export`<sup>Required</sup> <a name="bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```python
bigquery_export: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `bigquery_export_input`<sup>Optional</sup> <a name="bigquery_export_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```python
bigquery_export_input: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

---


### GoogleDataplexDatascanDataQualitySpecOutputReference <a name="GoogleDataplexDatascanDataQualitySpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions">put_post_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetPostScanActions">reset_post_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRowFilter">reset_row_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent">reset_sampling_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_post_scan_actions` <a name="put_post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions"></a>

```python
def put_post_scan_actions(
  bigquery_export: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport = None
) -> None
```

###### `bigquery_export`<sup>Optional</sup> <a name="bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions.parameter.bigqueryExport"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleDataplexDatascanDataQualitySpecRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]]

---

##### `reset_post_scan_actions` <a name="reset_post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetPostScanActions"></a>

```python
def reset_post_scan_actions() -> None
```

##### `reset_row_filter` <a name="reset_row_filter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRowFilter"></a>

```python
def reset_row_filter() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_sampling_percent` <a name="reset_sampling_percent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent"></a>

```python
def reset_sampling_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActions">post_scan_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList">GoogleDataplexDatascanDataQualitySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput">post_scan_actions_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput">row_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput">sampling_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilter">row_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercent">sampling_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_scan_actions`<sup>Required</sup> <a name="post_scan_actions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActions"></a>

```python
post_scan_actions: GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rules"></a>

```python
rules: GoogleDataplexDatascanDataQualitySpecRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList">GoogleDataplexDatascanDataQualitySpecRulesList</a>

---

##### `post_scan_actions_input`<sup>Optional</sup> <a name="post_scan_actions_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput"></a>

```python
post_scan_actions_input: GoogleDataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

---

##### `row_filter_input`<sup>Optional</sup> <a name="row_filter_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput"></a>

```python
row_filter_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleDataplexDatascanDataQualitySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]]

---

##### `sampling_percent_input`<sup>Optional</sup> <a name="sampling_percent_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput"></a>

```python
sampling_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `row_filter`<sup>Required</sup> <a name="row_filter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilter"></a>

```python
row_filter: str
```

- *Type:* str

---

##### `sampling_percent`<sup>Required</sup> <a name="sampling_percent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercent"></a>

```python
sampling_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

---


### GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">reset_results_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_results_table` <a name="reset_results_table" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```python
def reset_results_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">results_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">results_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `results_table_input`<sup>Optional</sup> <a name="results_table_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```python
results_table_input: str
```

- *Type:* str

---

##### `results_table`<sup>Required</sup> <a name="results_table" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```python
results_table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---


### GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport">put_bigquery_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport">reset_bigquery_export</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_export` <a name="put_bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport"></a>

```python
def put_bigquery_export(
  results_table: str = None
) -> None
```

###### `results_table`<sup>Optional</sup> <a name="results_table" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport.parameter.resultsTable"></a>

- *Type:* str

The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}

---

##### `reset_bigquery_export` <a name="reset_bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```python
def reset_bigquery_export() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport">bigquery_export</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput">bigquery_export_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_export`<sup>Required</sup> <a name="bigquery_export" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```python
bigquery_export: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `bigquery_export_input`<sup>Optional</sup> <a name="bigquery_export_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```python
bigquery_export_input: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesList <a name="GoogleDataplexDatascanDataQualitySpecRulesList" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexDatascanDataQualitySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDataplexDatascanDataQualitySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]]

---


### GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation">put_non_null_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation">put_range_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation">put_regex_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation">put_row_condition_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation">put_set_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion">put_sql_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation">put_statistic_range_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation">put_table_condition_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation">put_uniqueness_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull">reset_ignore_null</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation">reset_non_null_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation">reset_range_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation">reset_regex_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation">reset_row_condition_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation">reset_set_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion">reset_sql_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation">reset_statistic_range_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation">reset_table_condition_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation">reset_uniqueness_expectation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_non_null_expectation` <a name="put_non_null_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation"></a>

```python
def put_non_null_expectation() -> None
```

##### `put_range_expectation` <a name="put_range_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation"></a>

```python
def put_range_expectation(
  max_value: str = None,
  min_value: str = None,
  strict_max_enabled: typing.Union[bool, IResolvable] = None,
  strict_min_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.maxValue"></a>

- *Type:* str

The maximum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}

---

###### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.minValue"></a>

- *Type:* str

The minimum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}

---

###### `strict_max_enabled`<sup>Optional</sup> <a name="strict_max_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.strictMaxEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}

---

###### `strict_min_enabled`<sup>Optional</sup> <a name="strict_min_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.strictMinEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}

---

##### `put_regex_expectation` <a name="put_regex_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation"></a>

```python
def put_regex_expectation(
  regex: str
) -> None
```

###### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation.parameter.regex"></a>

- *Type:* str

A regular expression the column value is expected to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#regex GoogleDataplexDatascan#regex}

---

##### `put_row_condition_expectation` <a name="put_row_condition_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation"></a>

```python
def put_row_condition_expectation(
  sql_expression: str
) -> None
```

###### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation.parameter.sqlExpression"></a>

- *Type:* str

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}

---

##### `put_set_expectation` <a name="put_set_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation"></a>

```python
def put_set_expectation(
  values: typing.List[str]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation.parameter.values"></a>

- *Type:* typing.List[str]

Expected values for the column value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#values GoogleDataplexDatascan#values}

---

##### `put_sql_assertion` <a name="put_sql_assertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion"></a>

```python
def put_sql_assertion(
  sql_statement: str
) -> None
```

###### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion.parameter.sqlStatement"></a>

- *Type:* str

The SQL statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sql_statement GoogleDataplexDatascan#sql_statement}

---

##### `put_statistic_range_expectation` <a name="put_statistic_range_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation"></a>

```python
def put_statistic_range_expectation(
  statistic: str,
  max_value: str = None,
  min_value: str = None,
  strict_max_enabled: typing.Union[bool, IResolvable] = None,
  strict_min_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.statistic"></a>

- *Type:* str

column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#statistic GoogleDataplexDatascan#statistic}

---

###### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.maxValue"></a>

- *Type:* str

The maximum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}

---

###### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.minValue"></a>

- *Type:* str

The minimum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}

---

###### `strict_max_enabled`<sup>Optional</sup> <a name="strict_max_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.strictMaxEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}

---

###### `strict_min_enabled`<sup>Optional</sup> <a name="strict_min_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.strictMinEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}

---

##### `put_table_condition_expectation` <a name="put_table_condition_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation"></a>

```python
def put_table_condition_expectation(
  sql_expression: str
) -> None
```

###### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation.parameter.sqlExpression"></a>

- *Type:* str

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}

---

##### `put_uniqueness_expectation` <a name="put_uniqueness_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation"></a>

```python
def put_uniqueness_expectation() -> None
```

##### `reset_column` <a name="reset_column" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ignore_null` <a name="reset_ignore_null" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull"></a>

```python
def reset_ignore_null() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_non_null_expectation` <a name="reset_non_null_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation"></a>

```python
def reset_non_null_expectation() -> None
```

##### `reset_range_expectation` <a name="reset_range_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation"></a>

```python
def reset_range_expectation() -> None
```

##### `reset_regex_expectation` <a name="reset_regex_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation"></a>

```python
def reset_regex_expectation() -> None
```

##### `reset_row_condition_expectation` <a name="reset_row_condition_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation"></a>

```python
def reset_row_condition_expectation() -> None
```

##### `reset_set_expectation` <a name="reset_set_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation"></a>

```python
def reset_set_expectation() -> None
```

##### `reset_sql_assertion` <a name="reset_sql_assertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion"></a>

```python
def reset_sql_assertion() -> None
```

##### `reset_statistic_range_expectation` <a name="reset_statistic_range_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation"></a>

```python
def reset_statistic_range_expectation() -> None
```

##### `reset_table_condition_expectation` <a name="reset_table_condition_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation"></a>

```python
def reset_table_condition_expectation() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_uniqueness_expectation` <a name="reset_uniqueness_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation"></a>

```python
def reset_uniqueness_expectation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation">non_null_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation">range_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation">regex_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation">row_condition_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation">set_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion">sql_assertion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation">statistic_range_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation">table_condition_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation">uniqueness_expectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput">dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput">ignore_null_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput">non_null_expectation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput">range_expectation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput">regex_expectation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput">row_condition_expectation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput">set_expectation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput">sql_assertion_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput">statistic_range_expectation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput">table_condition_expectation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput">uniqueness_expectation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimension">dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull">ignore_null</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `non_null_expectation`<sup>Required</sup> <a name="non_null_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation"></a>

```python
non_null_expectation: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a>

---

##### `range_expectation`<sup>Required</sup> <a name="range_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation"></a>

```python
range_expectation: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a>

---

##### `regex_expectation`<sup>Required</sup> <a name="regex_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation"></a>

```python
regex_expectation: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a>

---

##### `row_condition_expectation`<sup>Required</sup> <a name="row_condition_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation"></a>

```python
row_condition_expectation: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a>

---

##### `set_expectation`<sup>Required</sup> <a name="set_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation"></a>

```python
set_expectation: GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a>

---

##### `sql_assertion`<sup>Required</sup> <a name="sql_assertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion"></a>

```python
sql_assertion: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a>

---

##### `statistic_range_expectation`<sup>Required</sup> <a name="statistic_range_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation"></a>

```python
statistic_range_expectation: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a>

---

##### `table_condition_expectation`<sup>Required</sup> <a name="table_condition_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation"></a>

```python
table_condition_expectation: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a>

---

##### `uniqueness_expectation`<sup>Required</sup> <a name="uniqueness_expectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation"></a>

```python
uniqueness_expectation: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput"></a>

```python
dimension_input: str
```

- *Type:* str

---

##### `ignore_null_input`<sup>Optional</sup> <a name="ignore_null_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput"></a>

```python
ignore_null_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_null_expectation_input`<sup>Optional</sup> <a name="non_null_expectation_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput"></a>

```python
non_null_expectation_input: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `range_expectation_input`<sup>Optional</sup> <a name="range_expectation_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput"></a>

```python
range_expectation_input: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `regex_expectation_input`<sup>Optional</sup> <a name="regex_expectation_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput"></a>

```python
regex_expectation_input: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `row_condition_expectation_input`<sup>Optional</sup> <a name="row_condition_expectation_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput"></a>

```python
row_condition_expectation_input: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `set_expectation_input`<sup>Optional</sup> <a name="set_expectation_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput"></a>

```python
set_expectation_input: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `sql_assertion_input`<sup>Optional</sup> <a name="sql_assertion_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput"></a>

```python
sql_assertion_input: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---

##### `statistic_range_expectation_input`<sup>Optional</sup> <a name="statistic_range_expectation_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput"></a>

```python
statistic_range_expectation_input: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `table_condition_expectation_input`<sup>Optional</sup> <a name="table_condition_expectation_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput"></a>

```python
table_condition_expectation_input: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uniqueness_expectation_input`<sup>Optional</sup> <a name="uniqueness_expectation_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput"></a>

```python
uniqueness_expectation_input: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

---

##### `ignore_null`<sup>Required</sup> <a name="ignore_null" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull"></a>

```python
ignore_null: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataplexDatascanDataQualitySpecRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>]

---


### GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled">reset_strict_max_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled">reset_strict_min_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```

##### `reset_strict_max_enabled` <a name="reset_strict_max_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```python
def reset_strict_max_enabled() -> None
```

##### `reset_strict_min_enabled` <a name="reset_strict_min_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```python
def reset_strict_min_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput">max_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput">min_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput">strict_max_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput">strict_min_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled">strict_max_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled">strict_min_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput"></a>

```python
max_value_input: str
```

- *Type:* str

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput"></a>

```python
min_value_input: str
```

- *Type:* str

---

##### `strict_max_enabled_input`<sup>Optional</sup> <a name="strict_max_enabled_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```python
strict_max_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_min_enabled_input`<sup>Optional</sup> <a name="strict_min_enabled_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```python
strict_min_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `strict_max_enabled`<sup>Required</sup> <a name="strict_max_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```python
strict_max_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_min_enabled`<sup>Required</sup> <a name="strict_min_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled"></a>

```python
strict_min_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput">sql_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement">sql_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_statement_input`<sup>Optional</sup> <a name="sql_statement_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput"></a>

```python
sql_statement_input: str
```

- *Type:* str

---

##### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement"></a>

```python
sql_statement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled">reset_strict_max_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled">reset_strict_min_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```

##### `reset_strict_max_enabled` <a name="reset_strict_max_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```python
def reset_strict_max_enabled() -> None
```

##### `reset_strict_min_enabled` <a name="reset_strict_min_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```python
def reset_strict_min_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput">max_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput">min_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput">strict_max_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput">strict_min_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled">strict_max_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled">strict_min_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput"></a>

```python
max_value_input: str
```

- *Type:* str

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput"></a>

```python
min_value_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `strict_max_enabled_input`<sup>Optional</sup> <a name="strict_max_enabled_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```python
strict_max_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_min_enabled_input`<sup>Optional</sup> <a name="strict_min_enabled_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```python
strict_min_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `strict_max_enabled`<sup>Required</sup> <a name="strict_max_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```python
strict_max_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_min_enabled`<sup>Required</sup> <a name="strict_min_enabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```python
strict_min_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---


### GoogleDataplexDatascanExecutionSpecOutputReference <a name="GoogleDataplexDatascanExecutionSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trigger` <a name="put_trigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger"></a>

```python
def put_trigger(
  on_demand: GoogleDataplexDatascanExecutionSpecTriggerOnDemand = None,
  schedule: GoogleDataplexDatascanExecutionSpecTriggerSchedule = None
) -> None
```

###### `on_demand`<sup>Optional</sup> <a name="on_demand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger.parameter.onDemand"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

on_demand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#on_demand GoogleDataplexDatascan#on_demand}

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#schedule GoogleDataplexDatascan#schedule}

---

##### `reset_field` <a name="reset_field" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.triggerInput">trigger_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.trigger"></a>

```python
trigger: GoogleDataplexDatascanExecutionSpecTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOutputReference</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.triggerInput"></a>

```python
trigger_input: GoogleDataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand">put_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand">reset_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_demand` <a name="put_on_demand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand"></a>

```python
def put_on_demand() -> None
```

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule"></a>

```python
def put_schedule(
  cron: str
) -> None
```

###### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule.parameter.cron"></a>

- *Type:* str

Cron schedule for running scans periodically. This field is required for Schedule scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataplex_datascan#cron GoogleDataplexDatascan#cron}

---

##### `reset_on_demand` <a name="reset_on_demand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand"></a>

```python
def reset_on_demand() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand">on_demand</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference">GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput">on_demand_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_demand`<sup>Required</sup> <a name="on_demand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand"></a>

```python
on_demand: GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.schedule"></a>

```python
schedule: GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference">GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference</a>

---

##### `on_demand_input`<sup>Optional</sup> <a name="on_demand_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput"></a>

```python
on_demand_input: GoogleDataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput"></a>

```python
schedule_input: GoogleDataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput">cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron">cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_input`<sup>Optional</sup> <a name="cron_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput"></a>

```python
cron_input: str
```

- *Type:* str

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron"></a>

```python
cron: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

---


### GoogleDataplexDatascanExecutionStatusList <a name="GoogleDataplexDatascanExecutionStatusList" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexDatascanExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataplexDatascanExecutionStatusOutputReference <a name="GoogleDataplexDatascanExecutionStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime">latest_job_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime">latest_job_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus">GoogleDataplexDatascanExecutionStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_job_end_time`<sup>Required</sup> <a name="latest_job_end_time" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime"></a>

```python
latest_job_end_time: str
```

- *Type:* str

---

##### `latest_job_start_time`<sup>Required</sup> <a name="latest_job_start_time" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime"></a>

```python
latest_job_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanExecutionStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus">GoogleDataplexDatascanExecutionStatus</a>

---


### GoogleDataplexDatascanTimeoutsOutputReference <a name="GoogleDataplexDatascanTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan

googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataplexDatascanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>]

---



