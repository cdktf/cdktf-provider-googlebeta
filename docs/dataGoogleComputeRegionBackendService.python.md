# `dataGoogleComputeRegionBackendService` Submodule <a name="`dataGoogleComputeRegionBackendService` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionBackendService <a name="DataGoogleComputeRegionBackendService" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service google_compute_region_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService(
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
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#name DataGoogleComputeRegionBackendService#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#region DataGoogleComputeRegionBackendService#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeRegionBackendService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeRegionBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.affinityCookieTtlSec">affinity_cookie_ttl_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList">DataGoogleComputeRegionBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.circuitBreakers">circuit_breakers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList">DataGoogleComputeRegionBackendServiceCircuitBreakersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec">connection_draining_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionTrackingPolicy">connection_tracking_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.consistentHash">consistent_hash</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList">DataGoogleComputeRegionBackendServiceConsistentHashList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.customMetrics">custom_metrics</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList">DataGoogleComputeRegionBackendServiceCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dynamicForwarding">dynamic_forwarding</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList">DataGoogleComputeRegionBackendServiceDynamicForwardingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.enableCdn">enable_cdn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.failoverPolicy">failover_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList">DataGoogleComputeRegionBackendServiceFailoverPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.generatedId">generated_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.healthChecks">health_checks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList">DataGoogleComputeRegionBackendServiceIapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.ipAddressSelectionPolicy">ip_address_selection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.localityLbPolicy">locality_lb_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList">DataGoogleComputeRegionBackendServiceLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.outlierDetection">outlier_detection</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList">DataGoogleComputeRegionBackendServiceOutlierDetectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.strongSessionAffinityCookie">strong_session_affinity_cookie</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.subsetting">subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList">DataGoogleComputeRegionBackendServiceSubsettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `affinity_cookie_ttl_sec`<sup>Required</sup> <a name="affinity_cookie_ttl_sec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.affinityCookieTtlSec"></a>

```python
affinity_cookie_ttl_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.backend"></a>

```python
backend: DataGoogleComputeRegionBackendServiceBackendList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList">DataGoogleComputeRegionBackendServiceBackendList</a>

---

##### `cdn_policy`<sup>Required</sup> <a name="cdn_policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdnPolicy"></a>

```python
cdn_policy: DataGoogleComputeRegionBackendServiceCdnPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyList</a>

---

##### `circuit_breakers`<sup>Required</sup> <a name="circuit_breakers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.circuitBreakers"></a>

```python
circuit_breakers: DataGoogleComputeRegionBackendServiceCircuitBreakersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList">DataGoogleComputeRegionBackendServiceCircuitBreakersList</a>

---

##### `connection_draining_timeout_sec`<sup>Required</sup> <a name="connection_draining_timeout_sec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec"></a>

```python
connection_draining_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_tracking_policy`<sup>Required</sup> <a name="connection_tracking_policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionTrackingPolicy"></a>

```python
connection_tracking_policy: DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList</a>

---

##### `consistent_hash`<sup>Required</sup> <a name="consistent_hash" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.consistentHash"></a>

```python
consistent_hash: DataGoogleComputeRegionBackendServiceConsistentHashList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList">DataGoogleComputeRegionBackendServiceConsistentHashList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `custom_metrics`<sup>Required</sup> <a name="custom_metrics" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.customMetrics"></a>

```python
custom_metrics: DataGoogleComputeRegionBackendServiceCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList">DataGoogleComputeRegionBackendServiceCustomMetricsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dynamic_forwarding`<sup>Required</sup> <a name="dynamic_forwarding" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dynamicForwarding"></a>

```python
dynamic_forwarding: DataGoogleComputeRegionBackendServiceDynamicForwardingList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList">DataGoogleComputeRegionBackendServiceDynamicForwardingList</a>

---

##### `enable_cdn`<sup>Required</sup> <a name="enable_cdn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.enableCdn"></a>

```python
enable_cdn: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `failover_policy`<sup>Required</sup> <a name="failover_policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.failoverPolicy"></a>

```python
failover_policy: DataGoogleComputeRegionBackendServiceFailoverPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList">DataGoogleComputeRegionBackendServiceFailoverPolicyList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `generated_id`<sup>Required</sup> <a name="generated_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.generatedId"></a>

```python
generated_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_checks`<sup>Required</sup> <a name="health_checks" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.healthChecks"></a>

```python
health_checks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.iap"></a>

```python
iap: DataGoogleComputeRegionBackendServiceIapList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList">DataGoogleComputeRegionBackendServiceIapList</a>

---

##### `ip_address_selection_policy`<sup>Required</sup> <a name="ip_address_selection_policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.ipAddressSelectionPolicy"></a>

```python
ip_address_selection_policy: str
```

- *Type:* str

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `locality_lb_policy`<sup>Required</sup> <a name="locality_lb_policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.localityLbPolicy"></a>

```python
locality_lb_policy: str
```

- *Type:* str

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.logConfig"></a>

```python
log_config: DataGoogleComputeRegionBackendServiceLogConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList">DataGoogleComputeRegionBackendServiceLogConfigList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `outlier_detection`<sup>Required</sup> <a name="outlier_detection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.outlierDetection"></a>

```python
outlier_detection: DataGoogleComputeRegionBackendServiceOutlierDetectionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList">DataGoogleComputeRegionBackendServiceOutlierDetectionList</a>

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

---

##### `strong_session_affinity_cookie`<sup>Required</sup> <a name="strong_session_affinity_cookie" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.strongSessionAffinityCookie"></a>

```python
strong_session_affinity_cookie: DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList</a>

---

##### `subsetting`<sup>Required</sup> <a name="subsetting" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.subsetting"></a>

```python
subsetting: DataGoogleComputeRegionBackendServiceSubsettingList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList">DataGoogleComputeRegionBackendServiceSubsettingList</a>

---

##### `timeout_sec`<sup>Required</sup> <a name="timeout_sec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionBackendServiceBackend <a name="DataGoogleComputeRegionBackendServiceBackend" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend()
```


### DataGoogleComputeRegionBackendServiceBackendCustomMetrics <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetrics" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics()
```


### DataGoogleComputeRegionBackendServiceCdnPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy()
```


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy()
```


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy()
```


### DataGoogleComputeRegionBackendServiceCircuitBreakers <a name="DataGoogleComputeRegionBackendServiceCircuitBreakers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers()
```


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout()
```


### DataGoogleComputeRegionBackendServiceConfig <a name="DataGoogleComputeRegionBackendServiceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#name DataGoogleComputeRegionBackendService#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_compute_region_backend_service#region DataGoogleComputeRegionBackendService#region}

---

### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy()
```


### DataGoogleComputeRegionBackendServiceConsistentHash <a name="DataGoogleComputeRegionBackendServiceConsistentHash" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash()
```


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie()
```


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl()
```


### DataGoogleComputeRegionBackendServiceCustomMetrics <a name="DataGoogleComputeRegionBackendServiceCustomMetrics" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics()
```


### DataGoogleComputeRegionBackendServiceDynamicForwarding <a name="DataGoogleComputeRegionBackendServiceDynamicForwarding" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding()
```


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection()
```


### DataGoogleComputeRegionBackendServiceFailoverPolicy <a name="DataGoogleComputeRegionBackendServiceFailoverPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy()
```


### DataGoogleComputeRegionBackendServiceIap <a name="DataGoogleComputeRegionBackendServiceIap" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap()
```


### DataGoogleComputeRegionBackendServiceLogConfig <a name="DataGoogleComputeRegionBackendServiceLogConfig" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig()
```


### DataGoogleComputeRegionBackendServiceOutlierDetection <a name="DataGoogleComputeRegionBackendServiceOutlierDetection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection()
```


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime()
```


### DataGoogleComputeRegionBackendServiceOutlierDetectionInterval <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval()
```


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie()
```


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl()
```


### DataGoogleComputeRegionBackendServiceSubsetting <a name="DataGoogleComputeRegionBackendServiceSubsetting" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionBackendServiceBackendCustomMetricsList <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetricsList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRun">dry_run</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization">max_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics">DataGoogleComputeRegionBackendServiceBackendCustomMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dry_run`<sup>Required</sup> <a name="dry_run" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRun"></a>

```python
dry_run: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_utilization`<sup>Required</sup> <a name="max_utilization" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization"></a>

```python
max_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceBackendCustomMetrics
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics">DataGoogleComputeRegionBackendServiceBackendCustomMetrics</a>

---


### DataGoogleComputeRegionBackendServiceBackendList <a name="DataGoogleComputeRegionBackendServiceBackendList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceBackendOutputReference <a name="DataGoogleComputeRegionBackendServiceBackendOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode">balancing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler">capacity_scaler</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.customMetrics">custom_metrics</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList">DataGoogleComputeRegionBackendServiceBackendCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.failover">failover</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">max_connections_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">max_connections_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint">max_rate_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance">max_rate_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization">max_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend">DataGoogleComputeRegionBackendServiceBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `balancing_mode`<sup>Required</sup> <a name="balancing_mode" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode"></a>

```python
balancing_mode: str
```

- *Type:* str

---

##### `capacity_scaler`<sup>Required</sup> <a name="capacity_scaler" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler"></a>

```python
capacity_scaler: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_metrics`<sup>Required</sup> <a name="custom_metrics" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.customMetrics"></a>

```python
custom_metrics: DataGoogleComputeRegionBackendServiceBackendCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList">DataGoogleComputeRegionBackendServiceBackendCustomMetricsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.failover"></a>

```python
failover: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_endpoint`<sup>Required</sup> <a name="max_connections_per_endpoint" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```python
max_connections_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_instance`<sup>Required</sup> <a name="max_connections_per_instance" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```python
max_connections_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_endpoint`<sup>Required</sup> <a name="max_rate_per_endpoint" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```python
max_rate_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_instance`<sup>Required</sup> <a name="max_rate_per_instance" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```python
max_rate_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_utilization`<sup>Required</sup> <a name="max_utilization" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization"></a>

```python
max_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceBackend
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend">DataGoogleComputeRegionBackendServiceBackend</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">include_host</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">include_named_cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">include_protocol</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">include_query_string</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">query_string_blacklist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">query_string_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_host`<sup>Required</sup> <a name="include_host" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```python
include_host: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `include_named_cookies`<sup>Required</sup> <a name="include_named_cookies" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```python
include_named_cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_protocol`<sup>Required</sup> <a name="include_protocol" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```python
include_protocol: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `include_query_string`<sup>Required</sup> <a name="include_query_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```python
include_query_string: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `query_string_blacklist`<sup>Required</sup> <a name="query_string_blacklist" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```python
query_string_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_whitelist`<sup>Required</sup> <a name="query_string_whitelist" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```python
query_string_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cache_key_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode">cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl">client_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching">negative_caching</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negative_caching_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serve_while_stale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signed_url_cache_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy">DataGoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_key_policy`<sup>Required</sup> <a name="cache_key_policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```python
cache_key_policy: DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList</a>

---

##### `cache_mode`<sup>Required</sup> <a name="cache_mode" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```python
cache_mode: str
```

- *Type:* str

---

##### `client_ttl`<sup>Required</sup> <a name="client_ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```python
client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negative_caching`<sup>Required</sup> <a name="negative_caching" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```python
negative_caching: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `negative_caching_policy`<sup>Required</sup> <a name="negative_caching_policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```python
negative_caching_policy: DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `serve_while_stale`<sup>Required</sup> <a name="serve_while_stale" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```python
serve_while_stale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signed_url_cache_max_age_sec`<sup>Required</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```python
signed_url_cache_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy">DataGoogleComputeRegionBackendServiceCdnPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersList <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout">connect_timeout</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">max_requests_per_connection</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers">DataGoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```python
connect_timeout: DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList</a>

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests`<sup>Required</sup> <a name="max_pending_requests" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests_per_connection`<sup>Required</sup> <a name="max_requests_per_connection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```python
max_requests_per_connection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers">DataGoogleComputeRegionBackendServiceCircuitBreakers</a>

---


### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends">connection_persistence_on_unhealthy_backends</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity">enable_strong_affinity</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec">idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode">tracking_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_persistence_on_unhealthy_backends`<sup>Required</sup> <a name="connection_persistence_on_unhealthy_backends" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends"></a>

```python
connection_persistence_on_unhealthy_backends: str
```

- *Type:* str

---

##### `enable_strong_affinity`<sup>Required</sup> <a name="enable_strong_affinity" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity"></a>

```python
enable_strong_affinity: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idle_timeout_sec`<sup>Required</sup> <a name="idle_timeout_sec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec"></a>

```python
idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tracking_mode`<sup>Required</sup> <a name="tracking_mode" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode"></a>

```python
tracking_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```python
ttl: DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashList <a name="DataGoogleComputeRegionBackendServiceConsistentHashList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceConsistentHashOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceConsistentHashOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie">http_cookie</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimum_ring_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash">DataGoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_cookie`<sup>Required</sup> <a name="http_cookie" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```python
http_cookie: DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList</a>

---

##### `http_header_name`<sup>Required</sup> <a name="http_header_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

---

##### `minimum_ring_size`<sup>Required</sup> <a name="minimum_ring_size" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```python
minimum_ring_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash">DataGoogleComputeRegionBackendServiceConsistentHash</a>

---


### DataGoogleComputeRegionBackendServiceCustomMetricsList <a name="DataGoogleComputeRegionBackendServiceCustomMetricsList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference <a name="DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRun">dry_run</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics">DataGoogleComputeRegionBackendServiceCustomMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dry_run`<sup>Required</sup> <a name="dry_run" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRun"></a>

```python
dry_run: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceCustomMetrics
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics">DataGoogleComputeRegionBackendServiceCustomMetrics</a>

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection</a>

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingList <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.ipPortSelection">ip_port_selection</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding">DataGoogleComputeRegionBackendServiceDynamicForwarding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_port_selection`<sup>Required</sup> <a name="ip_port_selection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.ipPortSelection"></a>

```python
ip_port_selection: DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceDynamicForwarding
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding">DataGoogleComputeRegionBackendServiceDynamicForwarding</a>

---


### DataGoogleComputeRegionBackendServiceFailoverPolicyList <a name="DataGoogleComputeRegionBackendServiceFailoverPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover">disable_connection_drain_on_failover</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy">drop_traffic_if_unhealthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio">failover_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy">DataGoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_connection_drain_on_failover`<sup>Required</sup> <a name="disable_connection_drain_on_failover" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover"></a>

```python
disable_connection_drain_on_failover: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `drop_traffic_if_unhealthy`<sup>Required</sup> <a name="drop_traffic_if_unhealthy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy"></a>

```python
drop_traffic_if_unhealthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `failover_ratio`<sup>Required</sup> <a name="failover_ratio" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio"></a>

```python
failover_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy">DataGoogleComputeRegionBackendServiceFailoverPolicy</a>

---


### DataGoogleComputeRegionBackendServiceIapList <a name="DataGoogleComputeRegionBackendServiceIapList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceIapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceIapOutputReference <a name="DataGoogleComputeRegionBackendServiceIapOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId">oauth2_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2_client_secret_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap">DataGoogleComputeRegionBackendServiceIap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```python
oauth2_client_id: str
```

- *Type:* str

---

##### `oauth2_client_secret`<sup>Required</sup> <a name="oauth2_client_secret" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```python
oauth2_client_secret: str
```

- *Type:* str

---

##### `oauth2_client_secret_sha256`<sup>Required</sup> <a name="oauth2_client_secret_sha256" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```python
oauth2_client_secret_sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap">DataGoogleComputeRegionBackendServiceIap</a>

---


### DataGoogleComputeRegionBackendServiceLogConfigList <a name="DataGoogleComputeRegionBackendServiceLogConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceLogConfigOutputReference <a name="DataGoogleComputeRegionBackendServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFields">optional_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalMode">optional_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig">DataGoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable"></a>

```python
enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `optional_fields`<sup>Required</sup> <a name="optional_fields" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFields"></a>

```python
optional_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `optional_mode`<sup>Required</sup> <a name="optional_mode" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalMode"></a>

```python
optional_mode: str
```

- *Type:* str

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig">DataGoogleComputeRegionBackendServiceLogConfig</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval">DataGoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval">DataGoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">base_ejection_time</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcing_consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcing_consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcing_success_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList">DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">success_rate_minimum_hosts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">success_rate_request_volume</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">success_rate_stdev_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection">DataGoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_ejection_time`<sup>Required</sup> <a name="base_ejection_time" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```python
base_ejection_time: DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList</a>

---

##### `consecutive_errors`<sup>Required</sup> <a name="consecutive_errors" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```python
consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_gateway_failure`<sup>Required</sup> <a name="consecutive_gateway_failure" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```python
consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_errors`<sup>Required</sup> <a name="enforcing_consecutive_errors" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```python
enforcing_consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_gateway_failure`<sup>Required</sup> <a name="enforcing_consecutive_gateway_failure" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```python
enforcing_consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_success_rate`<sup>Required</sup> <a name="enforcing_success_rate" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```python
enforcing_success_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```python
interval: DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList">DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList</a>

---

##### `max_ejection_percent`<sup>Required</sup> <a name="max_ejection_percent" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_minimum_hosts`<sup>Required</sup> <a name="success_rate_minimum_hosts" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```python
success_rate_minimum_hosts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_request_volume`<sup>Required</sup> <a name="success_rate_request_volume" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```python
success_rate_request_volume: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_stdev_factor`<sup>Required</sup> <a name="success_rate_stdev_factor" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```python
success_rate_stdev_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection">DataGoogleComputeRegionBackendServiceOutlierDetection</a>

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```python
ttl: DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---


### DataGoogleComputeRegionBackendServiceSubsettingList <a name="DataGoogleComputeRegionBackendServiceSubsettingList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionBackendServiceSubsettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionBackendServiceSubsettingOutputReference <a name="DataGoogleComputeRegionBackendServiceSubsettingOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_compute_region_backend_service

dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.subsetSize">subset_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting">DataGoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `subset_size`<sup>Required</sup> <a name="subset_size" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.subsetSize"></a>

```python
subset_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionBackendServiceSubsetting
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting">DataGoogleComputeRegionBackendServiceSubsetting</a>

---



