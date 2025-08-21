# `dataGoogleStorageControlOrganizationIntelligenceConfig` Submodule <a name="`dataGoogleStorageControlOrganizationIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_storage_control_organization_intelligence_config google_storage_control_organization_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig(
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
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_storage_control_organization_intelligence_config#id DataGoogleStorageControlOrganizationIntelligenceConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.name"></a>

- *Type:* str

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_storage_control_organization_intelligence_config#name DataGoogleStorageControlOrganizationIntelligenceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_storage_control_organization_intelligence_config#id DataGoogleStorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageControlOrganizationIntelligenceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageControlOrganizationIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_storage_control_organization_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlOrganizationIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig">edition_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig">effective_intelligence_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig">trial_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `edition_config`<sup>Required</sup> <a name="edition_config" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig"></a>

```python
edition_config: str
```

- *Type:* str

---

##### `effective_intelligence_config`<sup>Required</sup> <a name="effective_intelligence_config" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```python
effective_intelligence_config: DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.filter"></a>

```python
filter: DataGoogleStorageControlOrganizationIntelligenceConfigFilterList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterList</a>

---

##### `trial_config`<sup>Required</sup> <a name="trial_config" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig"></a>

```python
trial_config: DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfigConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig(
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
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.name">name</a></code> | <code>str</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_storage_control_organization_intelligence_config#id DataGoogleStorageControlOrganizationIntelligenceConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_storage_control_organization_intelligence_config#name DataGoogleStorageControlOrganizationIntelligenceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_storage_control_organization_intelligence_config#id DataGoogleStorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig()
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilter <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilter" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter()
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets()
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations()
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets()
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations()
```


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effective_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligence_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_edition`<sup>Required</sup> <a name="effective_edition" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```python
effective_edition: str
```

- *Type:* str

---

##### `intelligence_config`<sup>Required</sup> <a name="intelligence_config" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```python
intelligence_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excluded_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excluded_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">included_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">included_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter">DataGoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_cloud_storage_buckets`<sup>Required</sup> <a name="excluded_cloud_storage_buckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```python
excluded_cloud_storage_buckets: DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList</a>

---

##### `excluded_cloud_storage_locations`<sup>Required</sup> <a name="excluded_cloud_storage_locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```python
excluded_cloud_storage_locations: DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList</a>

---

##### `included_cloud_storage_buckets`<sup>Required</sup> <a name="included_cloud_storage_buckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```python
included_cloud_storage_buckets: DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList</a>

---

##### `included_cloud_storage_locations`<sup>Required</sup> <a name="included_cloud_storage_locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```python
included_cloud_storage_locations: DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter">DataGoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_storage_control_organization_intelligence_config

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a>

---



