# `googleNotebooksRuntimeIamPolicy` Submodule <a name="`googleNotebooksRuntimeIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNotebooksRuntimeIamPolicy <a name="GoogleNotebooksRuntimeIamPolicy" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy google_notebooks_runtime_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime_iam_policy

googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_data: str,
  runtime_name: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#policy_data GoogleNotebooksRuntimeIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.runtimeName">runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#runtime_name GoogleNotebooksRuntimeIamPolicy#runtime_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#id GoogleNotebooksRuntimeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#location GoogleNotebooksRuntimeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#project GoogleNotebooksRuntimeIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#policy_data GoogleNotebooksRuntimeIamPolicy#policy_data}.

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.runtimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#runtime_name GoogleNotebooksRuntimeIamPolicy#runtime_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#id GoogleNotebooksRuntimeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#location GoogleNotebooksRuntimeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#project GoogleNotebooksRuntimeIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNotebooksRuntimeIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime_iam_policy

googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime_iam_policy

googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime_iam_policy

googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime_iam_policy

googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNotebooksRuntimeIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNotebooksRuntimeIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNotebooksRuntimeIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNotebooksRuntimeIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.runtimeNameInput">runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.runtimeName">runtime_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `runtime_name_input`<sup>Optional</sup> <a name="runtime_name_input" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.runtimeNameInput"></a>

```python
runtime_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.runtimeName"></a>

```python
runtime_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNotebooksRuntimeIamPolicyConfig <a name="GoogleNotebooksRuntimeIamPolicyConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime_iam_policy

googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_data: str,
  runtime_name: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#policy_data GoogleNotebooksRuntimeIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.runtimeName">runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#runtime_name GoogleNotebooksRuntimeIamPolicy#runtime_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#id GoogleNotebooksRuntimeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#location GoogleNotebooksRuntimeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#project GoogleNotebooksRuntimeIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#policy_data GoogleNotebooksRuntimeIamPolicy#policy_data}.

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.runtimeName"></a>

```python
runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#runtime_name GoogleNotebooksRuntimeIamPolicy#runtime_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#id GoogleNotebooksRuntimeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#location GoogleNotebooksRuntimeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksRuntimeIamPolicy.GoogleNotebooksRuntimeIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime_iam_policy#project GoogleNotebooksRuntimeIamPolicy#project}.

---



