# `googleSccProjectSccBigQueryExport` Submodule <a name="`googleSccProjectSccBigQueryExport` Submodule" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccProjectSccBigQueryExport <a name="GoogleSccProjectSccBigQueryExport" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export google_scc_project_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_scc_big_query_export

googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  big_query_export_id: str,
  dataset: str = None,
  description: str = None,
  filter: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleSccProjectSccBigQueryExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#id GoogleSccProjectSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#project GoogleSccProjectSccBigQueryExport#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts">GoogleSccProjectSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.bigQueryExportId"></a>

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#big_query_export_id GoogleSccProjectSccBigQueryExport#big_query_export_id}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.dataset"></a>

- *Type:* str

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#dataset GoogleSccProjectSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.description"></a>

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#description GoogleSccProjectSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.filter"></a>

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#filter GoogleSccProjectSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#id GoogleSccProjectSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#project GoogleSccProjectSccBigQueryExport#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts">GoogleSccProjectSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#timeouts GoogleSccProjectSccBigQueryExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#create GoogleSccProjectSccBigQueryExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#delete GoogleSccProjectSccBigQueryExport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#update GoogleSccProjectSccBigQueryExport#update}.

---

##### `reset_dataset` <a name="reset_dataset" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSccProjectSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_scc_big_query_export

googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_scc_big_query_export

googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_scc_big_query_export

googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_scc_big_query_export

googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSccProjectSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSccProjectSccBigQueryExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSccProjectSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccProjectSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.mostRecentEditor">most_recent_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference">GoogleSccProjectSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.bigQueryExportIdInput">big_query_export_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts">GoogleSccProjectSccBigQueryExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `most_recent_editor`<sup>Required</sup> <a name="most_recent_editor" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.mostRecentEditor"></a>

```python
most_recent_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.timeouts"></a>

```python
timeouts: GoogleSccProjectSccBigQueryExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference">GoogleSccProjectSccBigQueryExportTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `big_query_export_id_input`<sup>Optional</sup> <a name="big_query_export_id_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.bigQueryExportIdInput"></a>

```python
big_query_export_id_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSccProjectSccBigQueryExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts">GoogleSccProjectSccBigQueryExportTimeouts</a>]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.bigQueryExportId"></a>

```python
big_query_export_id: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccProjectSccBigQueryExportConfig <a name="GoogleSccProjectSccBigQueryExportConfig" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_scc_big_query_export

googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  big_query_export_id: str,
  dataset: str = None,
  description: str = None,
  filter: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleSccProjectSccBigQueryExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.dataset">dataset</a></code> | <code>str</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.filter">filter</a></code> | <code>str</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#id GoogleSccProjectSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#project GoogleSccProjectSccBigQueryExport#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts">GoogleSccProjectSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.bigQueryExportId"></a>

```python
big_query_export_id: str
```

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#big_query_export_id GoogleSccProjectSccBigQueryExport#big_query_export_id}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#dataset GoogleSccProjectSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#description GoogleSccProjectSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#filter GoogleSccProjectSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#id GoogleSccProjectSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#project GoogleSccProjectSccBigQueryExport#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportConfig.property.timeouts"></a>

```python
timeouts: GoogleSccProjectSccBigQueryExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts">GoogleSccProjectSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#timeouts GoogleSccProjectSccBigQueryExport#timeouts}

---

### GoogleSccProjectSccBigQueryExportTimeouts <a name="GoogleSccProjectSccBigQueryExportTimeouts" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_scc_big_query_export

googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#create GoogleSccProjectSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#delete GoogleSccProjectSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#update GoogleSccProjectSccBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#create GoogleSccProjectSccBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#delete GoogleSccProjectSccBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_project_scc_big_query_export#update GoogleSccProjectSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccProjectSccBigQueryExportTimeoutsOutputReference <a name="GoogleSccProjectSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_scc_big_query_export

googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts">GoogleSccProjectSccBigQueryExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccProjectSccBigQueryExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectSccBigQueryExport.GoogleSccProjectSccBigQueryExportTimeouts">GoogleSccProjectSccBigQueryExportTimeouts</a>]

---



