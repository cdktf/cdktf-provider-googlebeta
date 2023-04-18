# `google_data_catalog_tag_template_iam_member`

Refer to the Terraform Registory for docs: [`google_data_catalog_tag_template_iam_member`](https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member).

# `googleDataCatalogTagTemplateIamMember` Submodule <a name="`googleDataCatalogTagTemplateIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogTagTemplateIamMember <a name="GoogleDataCatalogTagTemplateIamMember" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member google_data_catalog_tag_template_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template_iam_member

googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember(
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
  tag_template: str,
  condition: GoogleDataCatalogTagTemplateIamMemberCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#member GoogleDataCatalogTagTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#role GoogleDataCatalogTagTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.tagTemplate">tag_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#tag_template GoogleDataCatalogTagTemplateIamMember#tag_template}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition">GoogleDataCatalogTagTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#id GoogleDataCatalogTagTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#project GoogleDataCatalogTagTemplateIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#region GoogleDataCatalogTagTemplateIamMember#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#member GoogleDataCatalogTagTemplateIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#role GoogleDataCatalogTagTemplateIamMember#role}.

---

##### `tag_template`<sup>Required</sup> <a name="tag_template" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.tagTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#tag_template GoogleDataCatalogTagTemplateIamMember#tag_template}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition">GoogleDataCatalogTagTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#condition GoogleDataCatalogTagTemplateIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#id GoogleDataCatalogTagTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#project GoogleDataCatalogTagTemplateIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#region GoogleDataCatalogTagTemplateIamMember#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#expression GoogleDataCatalogTagTemplateIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#title GoogleDataCatalogTagTemplateIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#description GoogleDataCatalogTagTemplateIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template_iam_member

googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template_iam_member

googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template_iam_member

googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference">GoogleDataCatalogTagTemplateIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition">GoogleDataCatalogTagTemplateIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.tagTemplateInput">tag_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.tagTemplate">tag_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.condition"></a>

```python
condition: GoogleDataCatalogTagTemplateIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference">GoogleDataCatalogTagTemplateIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.conditionInput"></a>

```python
condition_input: GoogleDataCatalogTagTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition">GoogleDataCatalogTagTemplateIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `tag_template_input`<sup>Optional</sup> <a name="tag_template_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.tagTemplateInput"></a>

```python
tag_template_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `tag_template`<sup>Required</sup> <a name="tag_template" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.tagTemplate"></a>

```python
tag_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogTagTemplateIamMemberCondition <a name="GoogleDataCatalogTagTemplateIamMemberCondition" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template_iam_member

googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#expression GoogleDataCatalogTagTemplateIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#title GoogleDataCatalogTagTemplateIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#description GoogleDataCatalogTagTemplateIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#expression GoogleDataCatalogTagTemplateIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#title GoogleDataCatalogTagTemplateIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#description GoogleDataCatalogTagTemplateIamMember#description}.

---

### GoogleDataCatalogTagTemplateIamMemberConfig <a name="GoogleDataCatalogTagTemplateIamMemberConfig" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template_iam_member

googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  role: str,
  tag_template: str,
  condition: GoogleDataCatalogTagTemplateIamMemberCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#member GoogleDataCatalogTagTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#role GoogleDataCatalogTagTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.tagTemplate">tag_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#tag_template GoogleDataCatalogTagTemplateIamMember#tag_template}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition">GoogleDataCatalogTagTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#id GoogleDataCatalogTagTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#project GoogleDataCatalogTagTemplateIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#region GoogleDataCatalogTagTemplateIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#member GoogleDataCatalogTagTemplateIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#role GoogleDataCatalogTagTemplateIamMember#role}.

---

##### `tag_template`<sup>Required</sup> <a name="tag_template" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.tagTemplate"></a>

```python
tag_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#tag_template GoogleDataCatalogTagTemplateIamMember#tag_template}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.condition"></a>

```python
condition: GoogleDataCatalogTagTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition">GoogleDataCatalogTagTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#condition GoogleDataCatalogTagTemplateIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#id GoogleDataCatalogTagTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#project GoogleDataCatalogTagTemplateIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.0/docs/resources/google_data_catalog_tag_template_iam_member#region GoogleDataCatalogTagTemplateIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogTagTemplateIamMemberConditionOutputReference <a name="GoogleDataCatalogTagTemplateIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template_iam_member

googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition">GoogleDataCatalogTagTemplateIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogTagTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplateIamMember.GoogleDataCatalogTagTemplateIamMemberCondition">GoogleDataCatalogTagTemplateIamMemberCondition</a>

---



