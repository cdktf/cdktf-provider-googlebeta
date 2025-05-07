# `dataGoogleCloudIdentityGroupMemberships` Submodule <a name="`dataGoogleCloudIdentityGroupMemberships` Submodule" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupMemberships <a name="DataGoogleCloudIdentityGroupMemberships" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/data-sources/google_cloud_identity_group_memberships google_cloud_identity_group_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.group">group</a></code> | <code>str</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/data-sources/google_cloud_identity_group_memberships#id DataGoogleCloudIdentityGroupMemberships#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.group"></a>

- *Type:* str

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/data-sources/google_cloud_identity_group_memberships#group DataGoogleCloudIdentityGroupMemberships#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/data-sources/google_cloud_identity_group_memberships#id DataGoogleCloudIdentityGroupMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudIdentityGroupMemberships to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudIdentityGroupMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/data-sources/google_cloud_identity_group_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.memberships">memberships</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList">DataGoogleCloudIdentityGroupMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `memberships`<sup>Required</sup> <a name="memberships" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.memberships"></a>

```python
memberships: DataGoogleCloudIdentityGroupMembershipsMembershipsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList">DataGoogleCloudIdentityGroupMembershipsMembershipsList</a>

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupMembershipsConfig <a name="DataGoogleCloudIdentityGroupMembershipsConfig" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.group">group</a></code> | <code>str</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/data-sources/google_cloud_identity_group_memberships#id DataGoogleCloudIdentityGroupMemberships#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/data-sources/google_cloud_identity_group_memberships#group DataGoogleCloudIdentityGroupMemberships#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/data-sources/google_cloud_identity_group_memberships#id DataGoogleCloudIdentityGroupMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupMembershipsMemberships <a name="DataGoogleCloudIdentityGroupMembershipsMemberships" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships()
```


### DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey()
```


### DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey()
```


### DataGoogleCloudIdentityGroupMembershipsMembershipsRoles <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRoles" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles()
```


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupMembershipsMembershipsList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsList" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey">DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey">DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey</a>

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.memberKey">member_key</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList">DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.preferredMemberKey">preferred_member_key</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships">DataGoogleCloudIdentityGroupMembershipsMemberships</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `member_key`<sup>Required</sup> <a name="member_key" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.memberKey"></a>

```python
member_key: DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList">DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKeyList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preferred_member_key`<sup>Required</sup> <a name="preferred_member_key" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.preferredMemberKey"></a>

```python
preferred_member_key: DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.roles"></a>

```python
roles: DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupMembershipsMemberships
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships">DataGoogleCloudIdentityGroupMembershipsMemberships</a>

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey</a>

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail</a>

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_cloud_identity_group_memberships

dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.expiryDetail">expiry_detail</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupMembershipsMembershipsRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiry_detail`<sup>Required</sup> <a name="expiry_detail" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.expiryDetail"></a>

```python
expiry_detail: DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupMembershipsMembershipsRoles
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupMembershipsMembershipsRoles</a>

---



