# `googleColabRuntimeTemplateIamMember` Submodule <a name="`googleColabRuntimeTemplateIamMember` Submodule" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabRuntimeTemplateIamMember <a name="GoogleColabRuntimeTemplateIamMember" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member google_colab_runtime_template_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template_iam_member

googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  role: str,
  runtime_template: str,
  condition: GoogleColabRuntimeTemplateIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#member GoogleColabRuntimeTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#role GoogleColabRuntimeTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.runtimeTemplate">runtime_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#runtime_template GoogleColabRuntimeTemplateIamMember#runtime_template}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition">GoogleColabRuntimeTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#id GoogleColabRuntimeTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#location GoogleColabRuntimeTemplateIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#project GoogleColabRuntimeTemplateIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#member GoogleColabRuntimeTemplateIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#role GoogleColabRuntimeTemplateIamMember#role}.

---

##### `runtime_template`<sup>Required</sup> <a name="runtime_template" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.runtimeTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#runtime_template GoogleColabRuntimeTemplateIamMember#runtime_template}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition">GoogleColabRuntimeTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#condition GoogleColabRuntimeTemplateIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#id GoogleColabRuntimeTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#location GoogleColabRuntimeTemplateIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#project GoogleColabRuntimeTemplateIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#expression GoogleColabRuntimeTemplateIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#title GoogleColabRuntimeTemplateIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#description GoogleColabRuntimeTemplateIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleColabRuntimeTemplateIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template_iam_member

googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template_iam_member

googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template_iam_member

googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template_iam_member

googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleColabRuntimeTemplateIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleColabRuntimeTemplateIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleColabRuntimeTemplateIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabRuntimeTemplateIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference">GoogleColabRuntimeTemplateIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition">GoogleColabRuntimeTemplateIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.runtimeTemplateInput">runtime_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.runtimeTemplate">runtime_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.condition"></a>

```python
condition: GoogleColabRuntimeTemplateIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference">GoogleColabRuntimeTemplateIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.conditionInput"></a>

```python
condition_input: GoogleColabRuntimeTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition">GoogleColabRuntimeTemplateIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `runtime_template_input`<sup>Optional</sup> <a name="runtime_template_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.runtimeTemplateInput"></a>

```python
runtime_template_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `runtime_template`<sup>Required</sup> <a name="runtime_template" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.runtimeTemplate"></a>

```python
runtime_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabRuntimeTemplateIamMemberCondition <a name="GoogleColabRuntimeTemplateIamMemberCondition" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template_iam_member

googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#expression GoogleColabRuntimeTemplateIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#title GoogleColabRuntimeTemplateIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#description GoogleColabRuntimeTemplateIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#expression GoogleColabRuntimeTemplateIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#title GoogleColabRuntimeTemplateIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#description GoogleColabRuntimeTemplateIamMember#description}.

---

### GoogleColabRuntimeTemplateIamMemberConfig <a name="GoogleColabRuntimeTemplateIamMemberConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template_iam_member

googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  role: str,
  runtime_template: str,
  condition: GoogleColabRuntimeTemplateIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#member GoogleColabRuntimeTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#role GoogleColabRuntimeTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.runtimeTemplate">runtime_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#runtime_template GoogleColabRuntimeTemplateIamMember#runtime_template}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition">GoogleColabRuntimeTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#id GoogleColabRuntimeTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#location GoogleColabRuntimeTemplateIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#project GoogleColabRuntimeTemplateIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#member GoogleColabRuntimeTemplateIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#role GoogleColabRuntimeTemplateIamMember#role}.

---

##### `runtime_template`<sup>Required</sup> <a name="runtime_template" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.runtimeTemplate"></a>

```python
runtime_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#runtime_template GoogleColabRuntimeTemplateIamMember#runtime_template}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.condition"></a>

```python
condition: GoogleColabRuntimeTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition">GoogleColabRuntimeTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#condition GoogleColabRuntimeTemplateIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#id GoogleColabRuntimeTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#location GoogleColabRuntimeTemplateIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_runtime_template_iam_member#project GoogleColabRuntimeTemplateIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabRuntimeTemplateIamMemberConditionOutputReference <a name="GoogleColabRuntimeTemplateIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template_iam_member

googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition">GoogleColabRuntimeTemplateIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplateIamMember.GoogleColabRuntimeTemplateIamMemberCondition">GoogleColabRuntimeTemplateIamMemberCondition</a>

---



