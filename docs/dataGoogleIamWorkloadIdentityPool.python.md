# `dataGoogleIamWorkloadIdentityPool` Submodule <a name="`dataGoogleIamWorkloadIdentityPool` Submodule" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPool <a name="DataGoogleIamWorkloadIdentityPool" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#workload_identity_pool_id DataGoogleIamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleIamWorkloadIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig">inline_certificate_issuance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineTrustConfig">inline_trust_config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">workload_identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `inline_certificate_issuance_config`<sup>Required</sup> <a name="inline_certificate_issuance_config" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig"></a>

```python
inline_certificate_issuance_config: DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList</a>

---

##### `inline_trust_config`<sup>Required</sup> <a name="inline_trust_config" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineTrustConfig"></a>

```python
inline_trust_config: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `workload_identity_pool_id_input`<sup>Optional</sup> <a name="workload_identity_pool_id_input" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```python
workload_identity_pool_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolConfig <a name="DataGoogleIamWorkloadIdentityPoolConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#workload_identity_pool_id DataGoogleIamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/data-sources/google_iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}.

---

### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig()
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfig <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig()
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles()
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools">ca_pools</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime">lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage">rotation_window_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_pools`<sup>Required</sup> <a name="ca_pools" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools"></a>

```python
ca_pools: StringMap
```

- *Type:* cdktf.StringMap

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime"></a>

```python
lifetime: str
```

- *Type:* str

---

##### `rotation_window_percentage`<sup>Required</sup> <a name="rotation_window_percentage" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage"></a>

```python
rotation_window_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors">trust_anchors</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain">trust_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trust_anchors`<sup>Required</sup> <a name="trust_anchors" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors"></a>

```python
trust_anchors: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a>

---

##### `trust_domain`<sup>Required</sup> <a name="trust_domain" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain"></a>

```python
trust_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_iam_workload_identity_pool

dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles">additional_trust_bundles</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig">DataGoogleIamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_trust_bundles`<sup>Required</sup> <a name="additional_trust_bundles" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles"></a>

```python
additional_trust_bundles: DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleIamWorkloadIdentityPoolInlineTrustConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig">DataGoogleIamWorkloadIdentityPoolInlineTrustConfig</a>

---



