# `dataGoogleStorageControlProjectIntelligenceConfig` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceConfig <a name="DataGoogleStorageControlProjectIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_project_intelligence_config google_storage_control_project_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier of the GCP project. For GCP project, this field can be project name or project number. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.name"></a>

- *Type:* str

Identifier of the GCP project. For GCP project, this field can be project name or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_project_intelligence_config#name DataGoogleStorageControlProjectIntelligenceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleStorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleStorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageControlProjectIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_project_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.editionConfig">edition_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.effectiveIntelligenceConfig">effective_intelligence_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList">DataGoogleStorageControlProjectIntelligenceConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.trialConfig">trial_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList">DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `edition_config`<sup>Required</sup> <a name="edition_config" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.editionConfig"></a>

```python
edition_config: str
```

- *Type:* str

---

##### `effective_intelligence_config`<sup>Required</sup> <a name="effective_intelligence_config" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```python
effective_intelligence_config: DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.filter"></a>

```python
filter: DataGoogleStorageControlProjectIntelligenceConfigFilterList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList">DataGoogleStorageControlProjectIntelligenceConfigFilterList</a>

---

##### `trial_config`<sup>Required</sup> <a name="trial_config" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.trialConfig"></a>

```python
trial_config: DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList">DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceConfigConfig <a name="DataGoogleStorageControlProjectIntelligenceConfigConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.name">name</a></code> | <code>str</code> | Identifier of the GCP project. For GCP project, this field can be project name or project number. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier of the GCP project. For GCP project, this field can be project name or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_project_intelligence_config#name DataGoogleStorageControlProjectIntelligenceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig()
```


### DataGoogleStorageControlProjectIntelligenceConfigFilter <a name="DataGoogleStorageControlProjectIntelligenceConfigFilter" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter()
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets()
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations()
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets()
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations()
```


### DataGoogleStorageControlProjectIntelligenceConfigTrialConfig <a name="DataGoogleStorageControlProjectIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effective_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligence_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_edition`<sup>Required</sup> <a name="effective_edition" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```python
effective_edition: str
```

- *Type:* str

---

##### `intelligence_config`<sup>Required</sup> <a name="intelligence_config" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```python
intelligence_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excluded_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excluded_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">included_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">included_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter">DataGoogleStorageControlProjectIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_cloud_storage_buckets`<sup>Required</sup> <a name="excluded_cloud_storage_buckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```python
excluded_cloud_storage_buckets: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList</a>

---

##### `excluded_cloud_storage_locations`<sup>Required</sup> <a name="excluded_cloud_storage_locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```python
excluded_cloud_storage_locations: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList</a>

---

##### `included_cloud_storage_buckets`<sup>Required</sup> <a name="included_cloud_storage_buckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```python
included_cloud_storage_buckets: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList</a>

---

##### `included_cloud_storage_locations`<sup>Required</sup> <a name="included_cloud_storage_locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```python
included_cloud_storage_locations: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter">DataGoogleStorageControlProjectIntelligenceConfigFilter</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList <a name="DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_project_intelligence_config

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig">DataGoogleStorageControlProjectIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceConfigTrialConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig">DataGoogleStorageControlProjectIntelligenceConfigTrialConfig</a>

---



