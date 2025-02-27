# `dataGoogleCloudAssetResourcesSearchAll` Submodule <a name="`dataGoogleCloudAssetResourcesSearchAll` Submodule" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudAssetResourcesSearchAll <a name="DataGoogleCloudAssetResourcesSearchAll" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all google_cloud_asset_resources_search_all}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope: str,
  asset_types: typing.List[str] = None,
  id: str = None,
  query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}.

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.assetTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetAssetTypes">reset_asset_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetQuery">reset_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_asset_types` <a name="reset_asset_types" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetAssetTypes"></a>

```python
def reset_asset_types() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetQuery"></a>

```python
def reset_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudAssetResourcesSearchAll resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudAssetResourcesSearchAll resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudAssetResourcesSearchAll to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudAssetResourcesSearchAll that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudAssetResourcesSearchAll to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.results">results</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList">DataGoogleCloudAssetResourcesSearchAllResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypesInput">asset_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.results"></a>

```python
results: DataGoogleCloudAssetResourcesSearchAllResultsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList">DataGoogleCloudAssetResourcesSearchAllResultsList</a>

---

##### `asset_types_input`<sup>Optional</sup> <a name="asset_types_input" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypesInput"></a>

```python
asset_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `asset_types`<sup>Required</sup> <a name="asset_types" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudAssetResourcesSearchAllConfig <a name="DataGoogleCloudAssetResourcesSearchAllConfig" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope: str,
  asset_types: typing.List[str] = None,
  id: str = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}.

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}.

---

### DataGoogleCloudAssetResourcesSearchAllResults <a name="DataGoogleCloudAssetResourcesSearchAllResults" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudAssetResourcesSearchAllResultsList <a name="DataGoogleCloudAssetResourcesSearchAllResultsList" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudAssetResourcesSearchAllResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudAssetResourcesSearchAllResultsOutputReference <a name="DataGoogleCloudAssetResourcesSearchAllResultsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_asset_resources_search_all

dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.additionalAttributes">additional_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults">DataGoogleCloudAssetResourcesSearchAllResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_attributes`<sup>Required</sup> <a name="additional_attributes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.additionalAttributes"></a>

```python
additional_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudAssetResourcesSearchAllResults
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults">DataGoogleCloudAssetResourcesSearchAllResults</a>

---



