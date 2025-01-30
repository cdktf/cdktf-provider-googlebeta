# `dataGoogleTpuV2AcceleratorTypes` Submodule <a name="`dataGoogleTpuV2AcceleratorTypes` Submodule" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleTpuV2AcceleratorTypes <a name="DataGoogleTpuV2AcceleratorTypes" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types google_tpu_v2_accelerator_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_tpu_v2_accelerator_types

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#id DataGoogleTpuV2AcceleratorTypes#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#project DataGoogleTpuV2AcceleratorTypes#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#zone DataGoogleTpuV2AcceleratorTypes#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#id DataGoogleTpuV2AcceleratorTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#project DataGoogleTpuV2AcceleratorTypes#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#zone DataGoogleTpuV2AcceleratorTypes#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleTpuV2AcceleratorTypes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_tpu_v2_accelerator_types

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_tpu_v2_accelerator_types

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_tpu_v2_accelerator_types

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_tpu_v2_accelerator_types

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleTpuV2AcceleratorTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleTpuV2AcceleratorTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleTpuV2AcceleratorTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleTpuV2AcceleratorTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleTpuV2AcceleratorTypesConfig <a name="DataGoogleTpuV2AcceleratorTypesConfig" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_tpu_v2_accelerator_types

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#id DataGoogleTpuV2AcceleratorTypes#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#project DataGoogleTpuV2AcceleratorTypes#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#zone DataGoogleTpuV2AcceleratorTypes#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#id DataGoogleTpuV2AcceleratorTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#project DataGoogleTpuV2AcceleratorTypes#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_tpu_v2_accelerator_types#zone DataGoogleTpuV2AcceleratorTypes#zone}.

---



