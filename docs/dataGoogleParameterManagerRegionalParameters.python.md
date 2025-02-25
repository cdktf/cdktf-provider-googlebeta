# `dataGoogleParameterManagerRegionalParameters` Submodule <a name="`dataGoogleParameterManagerRegionalParameters` Submodule" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerRegionalParameters <a name="DataGoogleParameterManagerRegionalParameters" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters google_parameter_manager_regional_parameters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Filter string, adhering to the rules in List-operation filtering. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.filter"></a>

- *Type:* str

Filter string, adhering to the rules in List-operation filtering.

List only parameters matching the filter.
If filter is empty, all regional parameters are listed from specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#filter DataGoogleParameterManagerRegionalParameters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleParameterManagerRegionalParameters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleParameterManagerRegionalParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerRegionalParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList">DataGoogleParameterManagerRegionalParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.parameters"></a>

```python
parameters: DataGoogleParameterManagerRegionalParametersParametersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList">DataGoogleParameterManagerRegionalParametersParametersList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerRegionalParametersConfig <a name="DataGoogleParameterManagerRegionalParametersConfig" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.filter">filter</a></code> | <code>str</code> | Filter string, adhering to the rules in List-operation filtering. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Filter string, adhering to the rules in List-operation filtering.

List only parameters matching the filter.
If filter is empty, all regional parameters are listed from specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#filter DataGoogleParameterManagerRegionalParameters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}.

---

### DataGoogleParameterManagerRegionalParametersParameters <a name="DataGoogleParameterManagerRegionalParametersParameters" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters()
```


### DataGoogleParameterManagerRegionalParametersParametersPolicyMember <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMember" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleParameterManagerRegionalParametersParametersList <a name="DataGoogleParameterManagerRegionalParametersParametersList" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleParameterManagerRegionalParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleParameterManagerRegionalParametersParametersOutputReference <a name="DataGoogleParameterManagerRegionalParametersParametersOutputReference" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.parameterId">parameter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.policyMember">policy_member</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList">DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters">DataGoogleParameterManagerRegionalParametersParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameter_id`<sup>Required</sup> <a name="parameter_id" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.parameterId"></a>

```python
parameter_id: str
```

- *Type:* str

---

##### `policy_member`<sup>Required</sup> <a name="policy_member" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.policyMember"></a>

```python
policy_member: DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList">DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleParameterManagerRegionalParametersParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters">DataGoogleParameterManagerRegionalParametersParameters</a>

---


### DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_parameter_manager_regional_parameters

dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyNamePrincipal">iam_policy_name_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyUidPrincipal">iam_policy_uid_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember">DataGoogleParameterManagerRegionalParametersParametersPolicyMember</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_policy_name_principal`<sup>Required</sup> <a name="iam_policy_name_principal" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```python
iam_policy_name_principal: str
```

- *Type:* str

---

##### `iam_policy_uid_principal`<sup>Required</sup> <a name="iam_policy_uid_principal" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```python
iam_policy_uid_principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleParameterManagerRegionalParametersParametersPolicyMember
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember">DataGoogleParameterManagerRegionalParametersParametersPolicyMember</a>

---



