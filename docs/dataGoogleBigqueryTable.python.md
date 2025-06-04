# `dataGoogleBigqueryTable` Submodule <a name="`dataGoogleBigqueryTable` Submodule" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBigqueryTable <a name="DataGoogleBigqueryTable" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table google_bigquery_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTable(
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
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.tableId">table_id</a></code> | <code>str</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#id DataGoogleBigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.datasetId"></a>

- *Type:* str

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#dataset_id DataGoogleBigqueryTable#dataset_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.tableId"></a>

- *Type:* str

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#table_id DataGoogleBigqueryTable#table_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#id DataGoogleBigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#project DataGoogleBigqueryTable#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleBigqueryTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleBigqueryTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleBigqueryTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleBigqueryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBigqueryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.biglakeConfiguration">biglake_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList">DataGoogleBigqueryTableBiglakeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.clustering">clustering</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.deletionProtection">deletion_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList">DataGoogleBigqueryTableEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.expirationTime">expiration_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalCatalogTableOptions">external_catalog_table_options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList">DataGoogleBigqueryTableExternalCatalogTableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalDataConfiguration">external_data_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList">DataGoogleBigqueryTableExternalDataConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList">DataGoogleBigqueryTableMaterializedViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.maxStaleness">max_staleness</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numBytes">num_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numLongTermBytes">num_long_term_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numRows">num_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList">DataGoogleBigqueryTableRangePartitioningList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.requirePartitionFilter">require_partition_filter</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.resourceTags">resource_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schemaForeignTypeInfo">schema_foreign_type_info</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList">DataGoogleBigqueryTableSchemaForeignTypeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableConstraints">table_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList">DataGoogleBigqueryTableTableConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableMetadataView">table_metadata_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableReplicationInfo">table_replication_info</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList">DataGoogleBigqueryTableTableReplicationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList">DataGoogleBigqueryTableTimePartitioningList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList">DataGoogleBigqueryTableViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `biglake_configuration`<sup>Required</sup> <a name="biglake_configuration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.biglakeConfiguration"></a>

```python
biglake_configuration: DataGoogleBigqueryTableBiglakeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList">DataGoogleBigqueryTableBiglakeConfigurationList</a>

---

##### `clustering`<sup>Required</sup> <a name="clustering" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.clustering"></a>

```python
clustering: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.encryptionConfiguration"></a>

```python
encryption_configuration: DataGoogleBigqueryTableEncryptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList">DataGoogleBigqueryTableEncryptionConfigurationList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.expirationTime"></a>

```python
expiration_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_catalog_table_options`<sup>Required</sup> <a name="external_catalog_table_options" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalCatalogTableOptions"></a>

```python
external_catalog_table_options: DataGoogleBigqueryTableExternalCatalogTableOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList">DataGoogleBigqueryTableExternalCatalogTableOptionsList</a>

---

##### `external_data_configuration`<sup>Required</sup> <a name="external_data_configuration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalDataConfiguration"></a>

```python
external_data_configuration: DataGoogleBigqueryTableExternalDataConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList">DataGoogleBigqueryTableExternalDataConfigurationList</a>

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `materialized_view`<sup>Required</sup> <a name="materialized_view" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.materializedView"></a>

```python
materialized_view: DataGoogleBigqueryTableMaterializedViewList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList">DataGoogleBigqueryTableMaterializedViewList</a>

---

##### `max_staleness`<sup>Required</sup> <a name="max_staleness" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.maxStaleness"></a>

```python
max_staleness: str
```

- *Type:* str

---

##### `num_bytes`<sup>Required</sup> <a name="num_bytes" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numBytes"></a>

```python
num_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_long_term_bytes`<sup>Required</sup> <a name="num_long_term_bytes" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numLongTermBytes"></a>

```python
num_long_term_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_rows`<sup>Required</sup> <a name="num_rows" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numRows"></a>

```python
num_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `range_partitioning`<sup>Required</sup> <a name="range_partitioning" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.rangePartitioning"></a>

```python
range_partitioning: DataGoogleBigqueryTableRangePartitioningList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList">DataGoogleBigqueryTableRangePartitioningList</a>

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.requirePartitionFilter"></a>

```python
require_partition_filter: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.resourceTags"></a>

```python
resource_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `schema_foreign_type_info`<sup>Required</sup> <a name="schema_foreign_type_info" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schemaForeignTypeInfo"></a>

```python
schema_foreign_type_info: DataGoogleBigqueryTableSchemaForeignTypeInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList">DataGoogleBigqueryTableSchemaForeignTypeInfoList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `table_constraints`<sup>Required</sup> <a name="table_constraints" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableConstraints"></a>

```python
table_constraints: DataGoogleBigqueryTableTableConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList">DataGoogleBigqueryTableTableConstraintsList</a>

---

##### `table_metadata_view`<sup>Required</sup> <a name="table_metadata_view" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableMetadataView"></a>

```python
table_metadata_view: str
```

- *Type:* str

---

##### `table_replication_info`<sup>Required</sup> <a name="table_replication_info" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableReplicationInfo"></a>

```python
table_replication_info: DataGoogleBigqueryTableTableReplicationInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList">DataGoogleBigqueryTableTableReplicationInfoList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_partitioning`<sup>Required</sup> <a name="time_partitioning" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.timePartitioning"></a>

```python
time_partitioning: DataGoogleBigqueryTableTimePartitioningList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList">DataGoogleBigqueryTableTimePartitioningList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.view"></a>

```python
view: DataGoogleBigqueryTableViewList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList">DataGoogleBigqueryTableViewList</a>

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBigqueryTableBiglakeConfiguration <a name="DataGoogleBigqueryTableBiglakeConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration()
```


### DataGoogleBigqueryTableConfig <a name="DataGoogleBigqueryTableConfig" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  table_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.tableId">table_id</a></code> | <code>str</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#id DataGoogleBigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#dataset_id DataGoogleBigqueryTable#dataset_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#table_id DataGoogleBigqueryTable#table_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#id DataGoogleBigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/data-sources/google_bigquery_table#project DataGoogleBigqueryTable#project}

---

### DataGoogleBigqueryTableEncryptionConfiguration <a name="DataGoogleBigqueryTableEncryptionConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration()
```


### DataGoogleBigqueryTableExternalCatalogTableOptions <a name="DataGoogleBigqueryTableExternalCatalogTableOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions()
```


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor()
```


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo()
```


### DataGoogleBigqueryTableExternalDataConfiguration <a name="DataGoogleBigqueryTableExternalDataConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration()
```


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions()
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions()
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily()
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn()
```


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions()
```


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions()
```


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions()
```


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions()
```


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions()
```


### DataGoogleBigqueryTableMaterializedView <a name="DataGoogleBigqueryTableMaterializedView" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView()
```


### DataGoogleBigqueryTableRangePartitioning <a name="DataGoogleBigqueryTableRangePartitioning" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning()
```


### DataGoogleBigqueryTableRangePartitioningRange <a name="DataGoogleBigqueryTableRangePartitioningRange" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange()
```


### DataGoogleBigqueryTableSchemaForeignTypeInfo <a name="DataGoogleBigqueryTableSchemaForeignTypeInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo()
```


### DataGoogleBigqueryTableTableConstraints <a name="DataGoogleBigqueryTableTableConstraints" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints()
```


### DataGoogleBigqueryTableTableConstraintsForeignKeys <a name="DataGoogleBigqueryTableTableConstraintsForeignKeys" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys()
```


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences()
```


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable()
```


### DataGoogleBigqueryTableTableConstraintsPrimaryKey <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey()
```


### DataGoogleBigqueryTableTableReplicationInfo <a name="DataGoogleBigqueryTableTableReplicationInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo()
```


### DataGoogleBigqueryTableTimePartitioning <a name="DataGoogleBigqueryTableTimePartitioning" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning()
```


### DataGoogleBigqueryTableView <a name="DataGoogleBigqueryTableView" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableView.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableView()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBigqueryTableBiglakeConfigurationList <a name="DataGoogleBigqueryTableBiglakeConfigurationList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableBiglakeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableBiglakeConfigurationOutputReference <a name="DataGoogleBigqueryTableBiglakeConfigurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri">storage_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration">DataGoogleBigqueryTableBiglakeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `storage_uri`<sup>Required</sup> <a name="storage_uri" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri"></a>

```python
storage_uri: str
```

- *Type:* str

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableBiglakeConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration">DataGoogleBigqueryTableBiglakeConfiguration</a>

---


### DataGoogleBigqueryTableEncryptionConfigurationList <a name="DataGoogleBigqueryTableEncryptionConfigurationList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableEncryptionConfigurationOutputReference <a name="DataGoogleBigqueryTableEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration">DataGoogleBigqueryTableEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration">DataGoogleBigqueryTableEncryptionConfiguration</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters">parameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions">DataGoogleBigqueryTableExternalCatalogTableOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters"></a>

```python
parameters: StringMap
```

- *Type:* cdktf.StringMap

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor"></a>

```python
storage_descriptor: DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalCatalogTableOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions">DataGoogleBigqueryTableExternalCatalogTableOptions</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `serde_info`<sup>Required</sup> <a name="serde_info" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo"></a>

```python
serde_info: DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```python
parameters: StringMap
```

- *Type:* cdktf.StringMap

---

##### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions">DataGoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions">DataGoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest">only_read_latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded">qualifier_encoded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString">qualifier_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `only_read_latest`<sup>Required</sup> <a name="only_read_latest" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest"></a>

```python
only_read_latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `qualifier_encoded`<sup>Required</sup> <a name="qualifier_encoded" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded"></a>

```python
qualifier_encoded: str
```

- *Type:* str

---

##### `qualifier_string`<sup>Required</sup> <a name="qualifier_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString"></a>

```python
qualifier_string: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId">family_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest">only_read_latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column"></a>

```python
column: DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a>

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `family_id`<sup>Required</sup> <a name="family_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId"></a>

```python
family_id: str
```

- *Type:* str

---

##### `only_read_latest`<sup>Required</sup> <a name="only_read_latest" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest"></a>

```python
only_read_latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily">column_family</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies">ignore_unspecified_column_families</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson">output_column_families_as_json</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString">read_rowkey_as_string</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily"></a>

```python
column_family: DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a>

---

##### `ignore_unspecified_column_families`<sup>Required</sup> <a name="ignore_unspecified_column_families" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies"></a>

```python
ignore_unspecified_column_families: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `output_column_families_as_json`<sup>Required</sup> <a name="output_column_families_as_json" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson"></a>

```python
output_column_families_as_json: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `read_rowkey_as_string`<sup>Required</sup> <a name="read_rowkey_as_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString"></a>

```python
read_rowkey_as_string: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote">quote</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions">DataGoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_jagged_rows`<sup>Required</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows"></a>

```python
allow_jagged_rows: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_quoted_newlines`<sup>Required</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote"></a>

```python
quote: str
```

- *Type:* str

---

##### `skip_leading_rows`<sup>Required</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions">DataGoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `skip_leading_rows`<sup>Required</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter">require_partition_filter</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix">source_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter"></a>

```python
require_partition_filter: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source_uri_prefix`<sup>Required</sup> <a name="source_uri_prefix" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix"></a>

```python
source_uri_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions">DataGoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions">DataGoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationList <a name="DataGoogleBigqueryTableExternalDataConfigurationList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect">autodetect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions">avro_options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList">DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions">bigtable_options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList">DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType">file_set_spec_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions">google_sheets_options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions">hive_partitioning_options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension">json_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList">DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode">metadata_cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata">object_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList">DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri">reference_file_schema_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration">DataGoogleBigqueryTableExternalDataConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect"></a>

```python
autodetect: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `avro_options`<sup>Required</sup> <a name="avro_options" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions"></a>

```python
avro_options: DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList">DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList</a>

---

##### `bigtable_options`<sup>Required</sup> <a name="bigtable_options" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions"></a>

```python
bigtable_options: DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList</a>

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `csv_options`<sup>Required</sup> <a name="csv_options" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions"></a>

```python
csv_options: DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList">DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList</a>

---

##### `file_set_spec_type`<sup>Required</sup> <a name="file_set_spec_type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType"></a>

```python
file_set_spec_type: str
```

- *Type:* str

---

##### `google_sheets_options`<sup>Required</sup> <a name="google_sheets_options" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions"></a>

```python
google_sheets_options: DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList</a>

---

##### `hive_partitioning_options`<sup>Required</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions"></a>

```python
hive_partitioning_options: DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList</a>

---

##### `ignore_unknown_values`<sup>Required</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `json_extension`<sup>Required</sup> <a name="json_extension" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension"></a>

```python
json_extension: str
```

- *Type:* str

---

##### `json_options`<sup>Required</sup> <a name="json_options" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions"></a>

```python
json_options: DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList">DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList</a>

---

##### `max_bad_records`<sup>Required</sup> <a name="max_bad_records" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_cache_mode`<sup>Required</sup> <a name="metadata_cache_mode" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode"></a>

```python
metadata_cache_mode: str
```

- *Type:* str

---

##### `object_metadata`<sup>Required</sup> <a name="object_metadata" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata"></a>

```python
object_metadata: str
```

- *Type:* str

---

##### `parquet_options`<sup>Required</sup> <a name="parquet_options" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions"></a>

```python
parquet_options: DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList">DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList</a>

---

##### `reference_file_schema_uri`<sup>Required</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri"></a>

```python
reference_file_schema_uri: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration">DataGoogleBigqueryTableExternalDataConfiguration</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference">enable_list_inference</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString">enum_as_string</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions">DataGoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_list_inference`<sup>Required</sup> <a name="enable_list_inference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference"></a>

```python
enable_list_inference: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enum_as_string`<sup>Required</sup> <a name="enum_as_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString"></a>

```python
enum_as_string: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions">DataGoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

---


### DataGoogleBigqueryTableMaterializedViewList <a name="DataGoogleBigqueryTableMaterializedViewList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableMaterializedViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableMaterializedViewOutputReference <a name="DataGoogleBigqueryTableMaterializedViewOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition">allow_non_incremental_definition</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh">enable_refresh</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs">refresh_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView">DataGoogleBigqueryTableMaterializedView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_non_incremental_definition`<sup>Required</sup> <a name="allow_non_incremental_definition" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition"></a>

```python
allow_non_incremental_definition: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_refresh`<sup>Required</sup> <a name="enable_refresh" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh"></a>

```python
enable_refresh: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `refresh_interval_ms`<sup>Required</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs"></a>

```python
refresh_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView">DataGoogleBigqueryTableMaterializedView</a>

---


### DataGoogleBigqueryTableRangePartitioningList <a name="DataGoogleBigqueryTableRangePartitioningList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableRangePartitioningOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableRangePartitioningOutputReference <a name="DataGoogleBigqueryTableRangePartitioningOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList">DataGoogleBigqueryTableRangePartitioningRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning">DataGoogleBigqueryTableRangePartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.range"></a>

```python
range: DataGoogleBigqueryTableRangePartitioningRangeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList">DataGoogleBigqueryTableRangePartitioningRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning">DataGoogleBigqueryTableRangePartitioning</a>

---


### DataGoogleBigqueryTableRangePartitioningRangeList <a name="DataGoogleBigqueryTableRangePartitioningRangeList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableRangePartitioningRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableRangePartitioningRangeOutputReference <a name="DataGoogleBigqueryTableRangePartitioningRangeOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange">DataGoogleBigqueryTableRangePartitioningRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange">DataGoogleBigqueryTableRangePartitioningRange</a>

---


### DataGoogleBigqueryTableSchemaForeignTypeInfoList <a name="DataGoogleBigqueryTableSchemaForeignTypeInfoList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference <a name="DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.typeSystem">type_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo">DataGoogleBigqueryTableSchemaForeignTypeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_system`<sup>Required</sup> <a name="type_system" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.typeSystem"></a>

```python
type_system: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableSchemaForeignTypeInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo">DataGoogleBigqueryTableSchemaForeignTypeInfo</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn">referenced_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn">referencing_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `referenced_column`<sup>Required</sup> <a name="referenced_column" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn"></a>

```python
referenced_column: str
```

- *Type:* str

---

##### `referencing_column`<sup>Required</sup> <a name="referencing_column" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn"></a>

```python
referencing_column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences">column_references</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable">referenced_table</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys">DataGoogleBigqueryTableTableConstraintsForeignKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_references`<sup>Required</sup> <a name="column_references" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences"></a>

```python
column_references: DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `referenced_table`<sup>Required</sup> <a name="referenced_table" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable"></a>

```python
referenced_table: DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableTableConstraintsForeignKeys
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys">DataGoogleBigqueryTableTableConstraintsForeignKeys</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---


### DataGoogleBigqueryTableTableConstraintsList <a name="DataGoogleBigqueryTableTableConstraintsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableTableConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableTableConstraintsOutputReference <a name="DataGoogleBigqueryTableTableConstraintsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys">foreign_keys</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList">DataGoogleBigqueryTableTableConstraintsForeignKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey">primary_key</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList">DataGoogleBigqueryTableTableConstraintsPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints">DataGoogleBigqueryTableTableConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `foreign_keys`<sup>Required</sup> <a name="foreign_keys" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys"></a>

```python
foreign_keys: DataGoogleBigqueryTableTableConstraintsForeignKeysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList">DataGoogleBigqueryTableTableConstraintsForeignKeysList</a>

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey"></a>

```python
primary_key: DataGoogleBigqueryTableTableConstraintsPrimaryKeyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList">DataGoogleBigqueryTableTableConstraintsPrimaryKeyList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints">DataGoogleBigqueryTableTableConstraints</a>

---


### DataGoogleBigqueryTableTableConstraintsPrimaryKeyList <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKeyList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey">DataGoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey">DataGoogleBigqueryTableTableConstraintsPrimaryKey</a>

---


### DataGoogleBigqueryTableTableReplicationInfoList <a name="DataGoogleBigqueryTableTableReplicationInfoList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableTableReplicationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableTableReplicationInfoOutputReference <a name="DataGoogleBigqueryTableTableReplicationInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs">replication_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId">source_dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId">source_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId">source_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo">DataGoogleBigqueryTableTableReplicationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replication_interval_ms`<sup>Required</sup> <a name="replication_interval_ms" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs"></a>

```python
replication_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_dataset_id`<sup>Required</sup> <a name="source_dataset_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId"></a>

```python
source_dataset_id: str
```

- *Type:* str

---

##### `source_project_id`<sup>Required</sup> <a name="source_project_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId"></a>

```python
source_project_id: str
```

- *Type:* str

---

##### `source_table_id`<sup>Required</sup> <a name="source_table_id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId"></a>

```python
source_table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo">DataGoogleBigqueryTableTableReplicationInfo</a>

---


### DataGoogleBigqueryTableTimePartitioningList <a name="DataGoogleBigqueryTableTimePartitioningList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableTimePartitioningOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableTimePartitioningOutputReference <a name="DataGoogleBigqueryTableTimePartitioningOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs">expiration_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter">require_partition_filter</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning">DataGoogleBigqueryTableTimePartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_ms`<sup>Required</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs"></a>

```python
expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter"></a>

```python
require_partition_filter: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning">DataGoogleBigqueryTableTimePartitioning</a>

---


### DataGoogleBigqueryTableViewList <a name="DataGoogleBigqueryTableViewList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryTableViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryTableViewOutputReference <a name="DataGoogleBigqueryTableViewOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_bigquery_table

dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.useLegacySql">use_legacy_sql</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableView">DataGoogleBigqueryTableView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `use_legacy_sql`<sup>Required</sup> <a name="use_legacy_sql" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.useLegacySql"></a>

```python
use_legacy_sql: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableView">DataGoogleBigqueryTableView</a>

---



