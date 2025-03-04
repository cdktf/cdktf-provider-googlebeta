# `dataGoogleAlloydbCluster` Submodule <a name="`dataGoogleAlloydbCluster` Submodule" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAlloydbCluster <a name="DataGoogleAlloydbCluster" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster google_alloydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the alloydb cluster. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#id DataGoogleAlloydbCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the alloydb cluster should reside. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#project DataGoogleAlloydbCluster#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the alloydb cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#cluster_id DataGoogleAlloydbCluster#cluster_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#id DataGoogleAlloydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.location"></a>

- *Type:* str

The location where the alloydb cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#location DataGoogleAlloydbCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#project DataGoogleAlloydbCluster#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleAlloydbCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleAlloydbCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleAlloydbCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleAlloydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleAlloydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.automatedBackupPolicy">automated_backup_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList">DataGoogleAlloydbClusterAutomatedBackupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.backupSource">backup_source</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList">DataGoogleAlloydbClusterBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.continuousBackupConfig">continuous_backup_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList">DataGoogleAlloydbClusterContinuousBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.continuousBackupInfo">continuous_backup_info</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList">DataGoogleAlloydbClusterContinuousBackupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList">DataGoogleAlloydbClusterEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.encryptionInfo">encryption_info</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList">DataGoogleAlloydbClusterEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.initialUser">initial_user</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList">DataGoogleAlloydbClusterInitialUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.maintenanceUpdatePolicy">maintenance_update_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList">DataGoogleAlloydbClusterMaintenanceUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.migrationSource">migration_source</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList">DataGoogleAlloydbClusterMigrationSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList">DataGoogleAlloydbClusterNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList">DataGoogleAlloydbClusterPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.restoreBackupSource">restore_backup_source</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList">DataGoogleAlloydbClusterRestoreBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.restoreContinuousBackupSource">restore_continuous_backup_source</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList">DataGoogleAlloydbClusterRestoreContinuousBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.secondaryConfig">secondary_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList">DataGoogleAlloydbClusterSecondaryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.skipAwaitMajorVersionUpgrade">skip_await_major_version_upgrade</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.subscriptionType">subscription_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.trialMetadata">trial_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList">DataGoogleAlloydbClusterTrialMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `automated_backup_policy`<sup>Required</sup> <a name="automated_backup_policy" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.automatedBackupPolicy"></a>

```python
automated_backup_policy: DataGoogleAlloydbClusterAutomatedBackupPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList">DataGoogleAlloydbClusterAutomatedBackupPolicyList</a>

---

##### `backup_source`<sup>Required</sup> <a name="backup_source" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.backupSource"></a>

```python
backup_source: DataGoogleAlloydbClusterBackupSourceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList">DataGoogleAlloydbClusterBackupSourceList</a>

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `continuous_backup_config`<sup>Required</sup> <a name="continuous_backup_config" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.continuousBackupConfig"></a>

```python
continuous_backup_config: DataGoogleAlloydbClusterContinuousBackupConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList">DataGoogleAlloydbClusterContinuousBackupConfigList</a>

---

##### `continuous_backup_info`<sup>Required</sup> <a name="continuous_backup_info" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.continuousBackupInfo"></a>

```python
continuous_backup_info: DataGoogleAlloydbClusterContinuousBackupInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList">DataGoogleAlloydbClusterContinuousBackupInfoList</a>

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.encryptionConfig"></a>

```python
encryption_config: DataGoogleAlloydbClusterEncryptionConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList">DataGoogleAlloydbClusterEncryptionConfigList</a>

---

##### `encryption_info`<sup>Required</sup> <a name="encryption_info" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.encryptionInfo"></a>

```python
encryption_info: DataGoogleAlloydbClusterEncryptionInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList">DataGoogleAlloydbClusterEncryptionInfoList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `initial_user`<sup>Required</sup> <a name="initial_user" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.initialUser"></a>

```python
initial_user: DataGoogleAlloydbClusterInitialUserList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList">DataGoogleAlloydbClusterInitialUserList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `maintenance_update_policy`<sup>Required</sup> <a name="maintenance_update_policy" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.maintenanceUpdatePolicy"></a>

```python
maintenance_update_policy: DataGoogleAlloydbClusterMaintenanceUpdatePolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList">DataGoogleAlloydbClusterMaintenanceUpdatePolicyList</a>

---

##### `migration_source`<sup>Required</sup> <a name="migration_source" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.migrationSource"></a>

```python
migration_source: DataGoogleAlloydbClusterMigrationSourceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList">DataGoogleAlloydbClusterMigrationSourceList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.networkConfig"></a>

```python
network_config: DataGoogleAlloydbClusterNetworkConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList">DataGoogleAlloydbClusterNetworkConfigList</a>

---

##### `psc_config`<sup>Required</sup> <a name="psc_config" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.pscConfig"></a>

```python
psc_config: DataGoogleAlloydbClusterPscConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList">DataGoogleAlloydbClusterPscConfigList</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `restore_backup_source`<sup>Required</sup> <a name="restore_backup_source" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.restoreBackupSource"></a>

```python
restore_backup_source: DataGoogleAlloydbClusterRestoreBackupSourceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList">DataGoogleAlloydbClusterRestoreBackupSourceList</a>

---

##### `restore_continuous_backup_source`<sup>Required</sup> <a name="restore_continuous_backup_source" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.restoreContinuousBackupSource"></a>

```python
restore_continuous_backup_source: DataGoogleAlloydbClusterRestoreContinuousBackupSourceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList">DataGoogleAlloydbClusterRestoreContinuousBackupSourceList</a>

---

##### `secondary_config`<sup>Required</sup> <a name="secondary_config" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.secondaryConfig"></a>

```python
secondary_config: DataGoogleAlloydbClusterSecondaryConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList">DataGoogleAlloydbClusterSecondaryConfigList</a>

---

##### `skip_await_major_version_upgrade`<sup>Required</sup> <a name="skip_await_major_version_upgrade" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.skipAwaitMajorVersionUpgrade"></a>

```python
skip_await_major_version_upgrade: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `trial_metadata`<sup>Required</sup> <a name="trial_metadata" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.trialMetadata"></a>

```python
trial_metadata: DataGoogleAlloydbClusterTrialMetadataList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList">DataGoogleAlloydbClusterTrialMetadataList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAlloydbClusterAutomatedBackupPolicy <a name="DataGoogleAlloydbClusterAutomatedBackupPolicy" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicy()
```


### DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig()
```


### DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention()
```


### DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention()
```


### DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule()
```


### DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes()
```


### DataGoogleAlloydbClusterBackupSource <a name="DataGoogleAlloydbClusterBackupSource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSource()
```


### DataGoogleAlloydbClusterConfig <a name="DataGoogleAlloydbClusterConfig" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the alloydb cluster. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#id DataGoogleAlloydbCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.location">location</a></code> | <code>str</code> | The location where the alloydb cluster should reside. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#project DataGoogleAlloydbCluster#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the alloydb cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#cluster_id DataGoogleAlloydbCluster#cluster_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#id DataGoogleAlloydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the alloydb cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#location DataGoogleAlloydbCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_alloydb_cluster#project DataGoogleAlloydbCluster#project}.

---

### DataGoogleAlloydbClusterContinuousBackupConfig <a name="DataGoogleAlloydbClusterContinuousBackupConfig" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfig()
```


### DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig <a name="DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig()
```


### DataGoogleAlloydbClusterContinuousBackupInfo <a name="DataGoogleAlloydbClusterContinuousBackupInfo" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfo()
```


### DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo <a name="DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo()
```


### DataGoogleAlloydbClusterEncryptionConfig <a name="DataGoogleAlloydbClusterEncryptionConfig" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfig()
```


### DataGoogleAlloydbClusterEncryptionInfo <a name="DataGoogleAlloydbClusterEncryptionInfo" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfo()
```


### DataGoogleAlloydbClusterInitialUser <a name="DataGoogleAlloydbClusterInitialUser" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUser.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUser()
```


### DataGoogleAlloydbClusterMaintenanceUpdatePolicy <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicy" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicy()
```


### DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows()
```


### DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime()
```


### DataGoogleAlloydbClusterMigrationSource <a name="DataGoogleAlloydbClusterMigrationSource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSource()
```


### DataGoogleAlloydbClusterNetworkConfig <a name="DataGoogleAlloydbClusterNetworkConfig" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfig()
```


### DataGoogleAlloydbClusterPscConfig <a name="DataGoogleAlloydbClusterPscConfig" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfig()
```


### DataGoogleAlloydbClusterRestoreBackupSource <a name="DataGoogleAlloydbClusterRestoreBackupSource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSource()
```


### DataGoogleAlloydbClusterRestoreContinuousBackupSource <a name="DataGoogleAlloydbClusterRestoreContinuousBackupSource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSource()
```


### DataGoogleAlloydbClusterSecondaryConfig <a name="DataGoogleAlloydbClusterSecondaryConfig" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfig()
```


### DataGoogleAlloydbClusterTrialMetadata <a name="DataGoogleAlloydbClusterTrialMetadata" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyList <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow">backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList">DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention">quantity_based_retention</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList">DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention">time_based_retention</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList">DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList">DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicy">DataGoogleAlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_window`<sup>Required</sup> <a name="backup_window" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow"></a>

```python
backup_window: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig"></a>

```python
encryption_config: DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList">DataGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `quantity_based_retention`<sup>Required</sup> <a name="quantity_based_retention" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention"></a>

```python
quantity_based_retention: DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList">DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList</a>

---

##### `time_based_retention`<sup>Required</sup> <a name="time_based_retention" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention"></a>

```python
time_based_retention: DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList">DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList</a>

---

##### `weekly_schedule`<sup>Required</sup> <a name="weekly_schedule" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule"></a>

```python
weekly_schedule: DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList">DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicy">DataGoogleAlloydbClusterAutomatedBackupPolicy</a>

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">DataGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod">retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">DataGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes">start_times</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_times`<sup>Required</sup> <a name="start_times" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes"></a>

```python
start_times: DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference <a name="DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">DataGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>

---


### DataGoogleAlloydbClusterBackupSourceList <a name="DataGoogleAlloydbClusterBackupSourceList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterBackupSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterBackupSourceOutputReference <a name="DataGoogleAlloydbClusterBackupSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.property.backupName">backup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSource">DataGoogleAlloydbClusterBackupSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_name`<sup>Required</sup> <a name="backup_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.property.backupName"></a>

```python
backup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterBackupSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterBackupSource">DataGoogleAlloydbClusterBackupSource</a>

---


### DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList <a name="DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference <a name="DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---


### DataGoogleAlloydbClusterContinuousBackupConfigList <a name="DataGoogleAlloydbClusterContinuousBackupConfigList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterContinuousBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterContinuousBackupConfigOutputReference <a name="DataGoogleAlloydbClusterContinuousBackupConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList">DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays">recovery_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfig">DataGoogleAlloydbClusterContinuousBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig"></a>

```python
encryption_config: DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList">DataGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList</a>

---

##### `recovery_window_days`<sup>Required</sup> <a name="recovery_window_days" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays"></a>

```python
recovery_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterContinuousBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupConfig">DataGoogleAlloydbClusterContinuousBackupConfig</a>

---


### DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList <a name="DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference <a name="DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions">kms_key_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo">DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key_versions`<sup>Required</sup> <a name="kms_key_versions" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```python
kms_key_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo">DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfo</a>

---


### DataGoogleAlloydbClusterContinuousBackupInfoList <a name="DataGoogleAlloydbClusterContinuousBackupInfoList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterContinuousBackupInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterContinuousBackupInfoOutputReference <a name="DataGoogleAlloydbClusterContinuousBackupInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime">earliest_restorable_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime">enabled_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo">encryption_info</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList">DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.schedule">schedule</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfo">DataGoogleAlloydbClusterContinuousBackupInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `earliest_restorable_time`<sup>Required</sup> <a name="earliest_restorable_time" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime"></a>

```python
earliest_restorable_time: str
```

- *Type:* str

---

##### `enabled_time`<sup>Required</sup> <a name="enabled_time" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime"></a>

```python
enabled_time: str
```

- *Type:* str

---

##### `encryption_info`<sup>Required</sup> <a name="encryption_info" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo"></a>

```python
encryption_info: DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList">DataGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.schedule"></a>

```python
schedule: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterContinuousBackupInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterContinuousBackupInfo">DataGoogleAlloydbClusterContinuousBackupInfo</a>

---


### DataGoogleAlloydbClusterEncryptionConfigList <a name="DataGoogleAlloydbClusterEncryptionConfigList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterEncryptionConfigOutputReference <a name="DataGoogleAlloydbClusterEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfig">DataGoogleAlloydbClusterEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionConfig">DataGoogleAlloydbClusterEncryptionConfig</a>

---


### DataGoogleAlloydbClusterEncryptionInfoList <a name="DataGoogleAlloydbClusterEncryptionInfoList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterEncryptionInfoOutputReference <a name="DataGoogleAlloydbClusterEncryptionInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions">kms_key_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfo">DataGoogleAlloydbClusterEncryptionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key_versions`<sup>Required</sup> <a name="kms_key_versions" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```python
kms_key_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterEncryptionInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterEncryptionInfo">DataGoogleAlloydbClusterEncryptionInfo</a>

---


### DataGoogleAlloydbClusterInitialUserList <a name="DataGoogleAlloydbClusterInitialUserList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterInitialUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterInitialUserOutputReference <a name="DataGoogleAlloydbClusterInitialUserOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUser">DataGoogleAlloydbClusterInitialUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUserOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterInitialUser
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterInitialUser">DataGoogleAlloydbClusterInitialUser</a>

---


### DataGoogleAlloydbClusterMaintenanceUpdatePolicyList <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicyList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList">DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTime"></a>

```python
start_time: DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList">DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows">DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows</a>

---


### DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

---


### DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference <a name="DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindows">maintenance_windows</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList">DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicy">DataGoogleAlloydbClusterMaintenanceUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_windows`<sup>Required</sup> <a name="maintenance_windows" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindows"></a>

```python
maintenance_windows: DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList">DataGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterMaintenanceUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMaintenanceUpdatePolicy">DataGoogleAlloydbClusterMaintenanceUpdatePolicy</a>

---


### DataGoogleAlloydbClusterMigrationSourceList <a name="DataGoogleAlloydbClusterMigrationSourceList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterMigrationSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterMigrationSourceOutputReference <a name="DataGoogleAlloydbClusterMigrationSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.hostPort">host_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSource">DataGoogleAlloydbClusterMigrationSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_port`<sup>Required</sup> <a name="host_port" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.hostPort"></a>

```python
host_port: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterMigrationSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterMigrationSource">DataGoogleAlloydbClusterMigrationSource</a>

---


### DataGoogleAlloydbClusterNetworkConfigList <a name="DataGoogleAlloydbClusterNetworkConfigList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterNetworkConfigOutputReference <a name="DataGoogleAlloydbClusterNetworkConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfig">DataGoogleAlloydbClusterNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_ip_range`<sup>Required</sup> <a name="allocated_ip_range" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterNetworkConfig">DataGoogleAlloydbClusterNetworkConfig</a>

---


### DataGoogleAlloydbClusterPscConfigList <a name="DataGoogleAlloydbClusterPscConfigList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterPscConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterPscConfigOutputReference <a name="DataGoogleAlloydbClusterPscConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.property.pscEnabled">psc_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfig">DataGoogleAlloydbClusterPscConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `psc_enabled`<sup>Required</sup> <a name="psc_enabled" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.property.pscEnabled"></a>

```python
psc_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterPscConfig">DataGoogleAlloydbClusterPscConfig</a>

---


### DataGoogleAlloydbClusterRestoreBackupSourceList <a name="DataGoogleAlloydbClusterRestoreBackupSourceList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterRestoreBackupSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterRestoreBackupSourceOutputReference <a name="DataGoogleAlloydbClusterRestoreBackupSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupName">backup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSource">DataGoogleAlloydbClusterRestoreBackupSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_name`<sup>Required</sup> <a name="backup_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupName"></a>

```python
backup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterRestoreBackupSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreBackupSource">DataGoogleAlloydbClusterRestoreBackupSource</a>

---


### DataGoogleAlloydbClusterRestoreContinuousBackupSourceList <a name="DataGoogleAlloydbClusterRestoreContinuousBackupSourceList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference <a name="DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime">point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSource">DataGoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `point_in_time`<sup>Required</sup> <a name="point_in_time" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime"></a>

```python
point_in_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterRestoreContinuousBackupSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterRestoreContinuousBackupSource">DataGoogleAlloydbClusterRestoreContinuousBackupSource</a>

---


### DataGoogleAlloydbClusterSecondaryConfigList <a name="DataGoogleAlloydbClusterSecondaryConfigList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterSecondaryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterSecondaryConfigOutputReference <a name="DataGoogleAlloydbClusterSecondaryConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterName">primary_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfig">DataGoogleAlloydbClusterSecondaryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_cluster_name`<sup>Required</sup> <a name="primary_cluster_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterName"></a>

```python
primary_cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterSecondaryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterSecondaryConfig">DataGoogleAlloydbClusterSecondaryConfig</a>

---


### DataGoogleAlloydbClusterTrialMetadataList <a name="DataGoogleAlloydbClusterTrialMetadataList" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbClusterTrialMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbClusterTrialMetadataOutputReference <a name="DataGoogleAlloydbClusterTrialMetadataOutputReference" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_alloydb_cluster

dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.graceEndTime">grace_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.upgradeTime">upgrade_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadata">DataGoogleAlloydbClusterTrialMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `grace_end_time`<sup>Required</sup> <a name="grace_end_time" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.graceEndTime"></a>

```python
grace_end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `upgrade_time`<sup>Required</sup> <a name="upgrade_time" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.upgradeTime"></a>

```python
upgrade_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbClusterTrialMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleAlloydbCluster.DataGoogleAlloydbClusterTrialMetadata">DataGoogleAlloydbClusterTrialMetadata</a>

---



